import asyncio
from websockets.server import serve


clients = set()

async def ws_handler(websocket, path):
    clients.add(websocket)
    async for message in websocket:
        await asyncio.wait([client.send(message) for client in clients])


async def main():
    async with serve(ws_handler, "localhost", 8765):
        await asyncio.Future() 


asyncio.run(main())

