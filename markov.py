import numpy as np

tweets = open('trump_tweet.txt', encoding='utf8').read()
tweet_text = tweets.split()


def gen_pairs(text):
    for i in range(len(text) - 1):
        yield (text[i], text[i + 1])


tweet_map = gen_pairs(tweet_text)

tweet_dict = {}

for a, b in tweet_map:
    if a in tweet_dict.keys():
        tweet_dict[a].append(b)
    else:
        tweet_dict[a] = [b]
