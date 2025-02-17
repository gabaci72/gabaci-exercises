#first_order_remainder = 269
#first_order_remainder % 10 = first_order_number
#print(first_order_remainder)

first_order_remainder = 269 % 10
print(first_order_remainder)

if first_order_remainder == 0:
    first_order_coupon = "yes"
else:
    first_order_coupon = "no"

print(first_order_coupon)

# Second Order
second_order_remainder = 270 % 10
print(second_order_remainder)

if second_order_remainder == 0:
  second_order_coupon = "yes"
else:
  second_order_coupon = "no"

print(second_order_coupon)
