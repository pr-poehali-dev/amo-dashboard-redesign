import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: AmoCRM OAuth authorization - get access token
    Args: event with httpMethod, body containing authorization code
    Returns: HTTP response with access and refresh tokens
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_str = event.get('body')
    if not body_str:
        body_data = {}
    else:
        try:
            body_data = json.loads(body_str)
        except json.JSONDecodeError:
            body_data = {}
    
    code = body_data.get('code', '')
    
    if not code:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Authorization code required'}),
            'isBase64Encoded': False
        }
    
    client_id = os.environ.get('AMOCRM_CLIENT_ID', '')
    client_secret = os.environ.get('AMOCRM_CLIENT_SECRET', '')
    redirect_uri = os.environ.get('AMOCRM_REDIRECT_URI', '')
    subdomain = os.environ.get('AMOCRM_SUBDOMAIN', '')
    
    if not all([client_id, client_secret, redirect_uri, subdomain]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'AmoCRM credentials not configured'}),
            'isBase64Encoded': False
        }
    
    token_url = f'https://{subdomain}.amocrm.ru/oauth2/access_token'
    
    payload = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirect_uri
    }
    
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(token_url, data=data, method='POST')
    req.add_header('Content-Type', 'application/json')
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            token_data = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'access_token': token_data.get('access_token'),
                    'refresh_token': token_data.get('refresh_token'),
                    'expires_in': token_data.get('expires_in')
                }),
                'isBase64Encoded': False
            }
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': e.code,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': f'AmoCRM OAuth error: {e.code}',
                'details': error_body
            }),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }