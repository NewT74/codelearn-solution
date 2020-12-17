def build_messenger_system(m):
    message = []
    count = {}
    for user in m:
        if user in message:
            message.remove(user)
        message.insert(0, user)
        if len(message) > 5:
            del message[5]
        if user not in count:
            count[user] = 0
        count[user] += 1
    result = []
    for i in message:
        result.append([i, count[i]])
    for i in range(5 - len(result)):
        result.append([])
    return result
