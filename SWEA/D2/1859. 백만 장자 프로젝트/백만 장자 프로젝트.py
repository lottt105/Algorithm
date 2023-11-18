T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    prices = list(map(int, input().split()))
    result = 0

    max_price_index = prices.index(max(prices))
    while max_price_index < len(prices):
        result += (prices[max_price_index] * max_price_index) - sum(prices[:max_price_index])
        prices = prices[max_price_index+1:]
        if prices:
            max_price_index = prices.index(max(prices))

    print(f'#{test_case} {result}')