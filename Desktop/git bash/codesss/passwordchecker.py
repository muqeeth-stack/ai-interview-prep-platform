password = input("Enter password: ")

length = len(password)

has_upper = False
has_lower = False
has_digit = False

for char in password:
    if char.isupper():
        has_upper = True
    elif char.islower():
        has_lower = True
    elif char.isdigit():
        has_digit = True

if length >= 8 and has_upper and has_lower and has_digit:
    print("Strong password")
else:
    print("Weak password")