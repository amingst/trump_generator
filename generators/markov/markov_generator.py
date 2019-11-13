import numpy as np
from cleaners import clean_urls

tweets = clean_urls("trump_tweet.txt")
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

first = np.random.choice(tweet_text)

while first.islower():
    first = np.random.choice(tweet_text)

tweet_chain = [first]

num_words = 46

for i in range(num_words):
    tweet_chain.append(np.random.choice(tweet_dict[tweet_chain[-1]]))


print(' '.join(tweet_chain))
