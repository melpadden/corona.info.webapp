import os

CONSTANTS = {
    'PORT': os.environ.get('PORT', 8000),
    'HTTP_STATUS': {
        '404_NOT_FOUND': 404,
        '201_CREATED': 201,
        '500_INTERNAL_SERVER_ERROR': 500
    },
    'ENDPOINT': {
        'MASTER_DETAIL': '/api/masterdetail',
        'GRID': '/api/grid',
        'LIST': '/api/list',
    }
}
