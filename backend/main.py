import asyncio

# Định nghĩa một coroutine (hàm bất đồng bộ)
async def hello():
    print("Bắt đầu hello")
    await asyncio.sleep(10)  # Chờ 1 giây mà không chặn luồng chính
    print("Xin chào!")
    print("Kết thúc hello")


async def other_task():
    for i in range(5):
        print(f"Tác vụ khác: {i}")
        await asyncio.sleep(1)

# Tạo đối tượng Event Loop
loop = asyncio.get_event_loop()

# Chạy coroutine trong Event Loop
loop.create_task(hello())
# loop.create_task(other_task())
loop.run_forever()

# Đóng Event Loop
loop.close()

# import time

# # Hàm chạy đồng bộ
# def hello():
#     print("Bắt đầu hello")
#     time.sleep(10)  # Chờ 1 giây và chặn luồng chính
#     print("Xin chào!")
#     print("Kết thúc hello")

# # Gọi hàm hello()
# hello()