# https://www.codewars.com/kata/53697be005f803751e0015aa/train/python

def encode(st):
    encoded = []
    for n in st:
        if n == "a":
            encoded.append("1")
        elif n == "e":
            encoded.append("2")
        elif n == "i":
            encoded.append("3")
        elif n == "o":
            encoded.append("4")
        elif n == "u":
            encoded.append("5")
        else:
            encoded.append(n)
    
    encoded_joined = "".join(encoded)

    return encoded_joined




def decode(st):
    decoded = []
    for n in st:
        if n == "1":
            decoded.append("a")
        elif n == "2":
            decoded.append("e")
        elif n == "3":
            decoded.append("i")
        elif n == "4":
            decoded.append("o")
        elif n == "5":
            decoded.append("u")
        else:
            decoded.append(n)
    
    decoded_joined = "".join(decoded)
    
    return decoded_joined


# def encode(s, t=str.maketrans("aeiou", "12345")):
#     return s.translate(t)
    
# def decode(s, t=str.maketrans("12345", "aeiou")):
#     return s.translate(t)