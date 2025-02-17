import textwrap
import random

# This function makes up the main body of the game and controls a players general flow through each of the options.
def health_inspector_kenny(visited):
    if visited == 0:
        print(textwrap.fill(lb +"Welcome Health Inspector Kenny.\nToday you have to inspect three restaurants and give them ratings.", width=60) +"\nWhere would you like to go first?\n"+lb)
        choice = location_selector(locations)
        if locations[choice] == "Billy's Big Burgers":
            locations.remove("Billy's Big Burgers")
            visited += 1
            billys_grade = billys_burgers()
            print(textwrap.fill("You've finished inspecting \"Billy's Big Burgers\" and have given it a grade of {0}.".format(grades[billys_grade]), width=60))
            health_inspector_kenny(visited)
        elif locations[choice] == "Lucy's Lemonade and Licorice":
            locations.remove("Lucy's Lemonade and Licorice")
            visited += 1
            lucys_grade = lucys_lemonade()
            print(textwrap.fill("You've finished inspecting \"Lucy's Lemonade and Licorice\" and have given it a grade of {0}.".format(grades[lucys_grade]), width=60))
            health_inspector_kenny(visited)
        elif locations[choice] == "Laura's Luncheonette":
            locations.remove("Laura's Luncheonette")
            visited += 1
            lauras_grade = lauras_luncheonette()
            print(textwrap.fill("You've finished inspecting \"Laura's Luncheonette\" and have given it a grade of {0}.".format(grades[lauras_grade]), width=60))
            health_inspector_kenny(visited)
    elif visited < 3:
        print("Where do you want to go next?"+lbb)
        choice = location_selector(locations)
        if locations[choice] == "Billy's Big Burgers":
            locations.remove("Billy's Big Burgers")
            visited += 1
            billys_grade = billys_burgers()
            print(textwrap.fill("You've finished inspecting \"Billy's Big Burgers\" and have given it a grade of {0}.".format(grades[billys_grade]), width=60))
            health_inspector_kenny(visited)
        elif locations[choice] == "Lucy's Lemonade and Licorice":
            locations.remove("Lucy's Lemonade and Licorice")
            visited += 1
            lucys_grade = lucys_lemonade()
            print(textwrap.fill("You've finished inspecting \"Lucy's Lemonade and Licorice\" and have given it a grade of {0}.".format(grades[lucys_grade]), width=60))
            health_inspector_kenny(visited)
        elif locations[choice] == "Laura's Luncheonette":
            locations.remove("Laura's Luncheonette")
            visited += 1
            lauras_grade = lauras_luncheonette()
            print(textwrap.fill("You've finished inspecting \"Laura's Luncheonette\" and have given it a grade of {0}.".format(grades[lauras_grade]), width=60))
            health_inspector_kenny(visited)
    else:
        print(textwrap.fill(lb + "Congratulations! You've finished a day of fullfilling health inspecting. Head home, pop open your favorite beverage, turn on old reruns of America's Next Top Model, and enjoy your evening." + lbb, width=60))

# Helper functions
def location_selector(locations):
  for i in range(0,len(locations)):
    print("("+str(i+1)+") " + locations[i]+"\n")
  selection = chooser(locations)
  return selection

def chooser(locations):
  try:
    selection = int(input("Enter the number of your choice: ")) - 1
    if selection >= len(locations):
      print("Sorry, invalid selection. Please try again.")
      selection = chooser(locations)
    return selection
  except (NameError, SyntaxError, EOFError):
    print("Sorry, invalid selection. Please try again.")
    selection = 0  # Placeholder for testing purposes
  return selection

def responder():
  response = int(input("Enter the number of your choice: "))
  if response not in [1, 2]:
    print("Please enter a valid choice.")
    responder()
  return response

def format_text(text):
  print(textwrap.fill(lb + text, width=60, replace_whitespace=False) + lbb)
  
# Locations
def billys_burgers():
  # 3 = A, 2 = B, 1 = C, 0 = F
  billys_grade = 3
  areas = ["Dining Room", "Bar", "Kitchen"]
  print(textwrap.fill(lb + "You enter the rustic yet charming all-American diner \"Billy's Big Burgers\". Billy himself, a large swarthy man in a striped apron, comes up to you and gruffly shakes your hand.\n\"Welcome Mr. Health Inspector, please take a look around, let me know if you need anything.\" Billy retreats back to the kitchen, keeping an eye on you as he backs away. Seems like a pretty weird guy.", width=60, replace_whitespace=False))
  for i in range(len(areas)):
    print("What area of the restaraunt would you like to check?\n"+ lb)
    choice = location_selector(areas)
    if areas[choice] == "Dining Room":
      format_text("You enter the dining room and are immediately hit with the smell of unwashed laundry. \"Hmm, that's not a good sign\" you think to yourself. Upon inspecting several tables, you find stains all over most of the tablecloths. You peer under the top of one of the booths only to find more dried gum than an elementary school's cafeteria.")
      print("How clean is the {0}?\n\n(1) {1} (pass this area).\n\n(2) {2} (fail this area).\n".format(areas[choice], clean_responses[random.randint(0,6)], dirty_responses[random.randint(0,6)]))
      response = responder()
      if response == 2:
        billys_grade -= 1
      print(textwrap.fill(lb + "You mark your grade for the {0} on your clipboard. The grade for Billy's Big Burgers is currently {1}".format(areas[choice], grades[billys_grade]) + lbb, width=60))
      areas.remove("Dining Room")
    elif areas[choice] == "Bar":
      format_text("Walking behind the bar, you see everything appears fairly organized and clean. You notice a small picture of a little girl next to the glasses. Billy notices you looking at the picture and comes over. \"That's my girl Sasha\", he taps the picture and looks directly in your eyes, \"she'd be really crushed if the restaurant didn't pass the health inspection. You wouldn't disappoint Sasha would you?\"")
      print("How clean is the {0}?\n\n(1) {1} (pass this area).\n\n(2) {2} (fail this area).\n".format(areas[choice], clean_responses[random.randint(0,6)], dirty_responses[random.randint(0,6)]))
      response = responder()
      if response == 2:
        billys_grade -= 1
      print(textwrap.fill(lb + "You mark your grade for the {0} on your clipboard. The grade for Billy's Big Burgers is currently {1}".format(areas[choice], grades[billys_grade]) + lbb, width=60))
      areas.remove("Bar")
    elif areas[choice] == "Kitchen":
      format_text("The first thing you see in the kitchen is a massive pile of dishes sitting in the sink. \"I haven't had a chance to clean those yet\", states Billy, standing in your way. Pushing past him you see more concerning things. Open packs of American cheese sitting on counters in the heat. A mysterious mound of grey meat sits on top of a cold grill. A strange orange fluid seems to be leaking from the bottom of the fridge. To top it off, you see an empty container of plastic gloves sitting above a workstation, stuffed with what appears to be used tissues.")
      print("How clean is the {0}?\n\n(1) {1} (pass this area).\n\n(2) {2} (fail this area).\n".format(areas[choice], clean_responses[random.randint(0,6)], dirty_responses[random.randint(0,6)]))
      response = responder()
      if response == 2:
        billys_grade -= 1
      print(textwrap.fill(lb + "You mark your grade for the {0} on your clipboard. The grade for Billy's Big Burgers is currently {1}".format(areas[choice], grades[billys_grade]) + lbb, width=60))
      areas.remove("Kitchen")
  return billys_grade

def lauras_luncheonette():
# 3 = A, 2 = B, 1 = C, 0 = F
  lauras_grade = 3
  areas = ["Dining Room", "Bar", "Kitchen"]
  print(textwrap.fill(lb + "You pull up to \"Laura's Luncheonette\", a plain white building with fading blue paint on the window trim. Laura meets you outside, bouncing from one foot to the other, appearing quite nervous. She leads you inside and gestures wildy. \"Please, please, inspect away, inspect it
