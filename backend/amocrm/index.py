import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any, Optional

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: AmoCRM API integration - fetch leads, contacts, and deals
    Args: event with httpMethod, queryStringParameters
    Returns: HTTP response with AmoCRM data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    access_token = event.get('headers', {}).get('x-auth-token', '')
    
    if not access_token:
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Access token required in X-Auth-Token header'}),
            'isBase64Encoded': False
        }
    
    subdomain = os.environ.get('AMOCRM_SUBDOMAIN', '')
    if not subdomain:
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'AmoCRM subdomain not configured'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters', {})
    endpoint = params.get('endpoint', 'leads')
    
    api_url = f'https://{subdomain}.amocrm.ru/api/v4/{endpoint}'
    
    req = urllib.request.Request(api_url)
    req.add_header('Authorization', f'Bearer {access_token}')
    req.add_header('Content-Type', 'application/json')
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps(data),
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
                'error': f'AmoCRM API error: {e.code}',
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