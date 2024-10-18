import random

def recommend_products(profile: dict):
    products = [
        {"product_name": "Low-Risk Bond", "score": random.uniform(0, 1)},
        {"product_name": "Medium-Risk Fund", "score": random.uniform(0, 1)},
        {"product_name": "High-Risk Stock", "score": random.uniform(0, 1)},
    ]
    return sorted(products, key=lambda x: -x["score"])
