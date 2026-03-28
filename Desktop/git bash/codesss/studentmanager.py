students = {}

def add_student():
    name = input("Enter student name: ")
    marks = int(input("Enter marks: "))
    students[name] = marks
    print("Student added successfully\n")

def view_students():
    if not students:
        print("No students found\n")
        return
    for name, marks in students.items():
        print(name, ":", marks)
    print()

def update_student():
    name = input("Enter student name to update: ")
    if name in students:
        marks = int(input("Enter new marks: "))
        students[name] = marks
        print("Student updated\n")
    else:
        print("Student not found\n")

def delete_student():
    name = input("Enter student name to delete: ")
    if name in students:
        del students[name]
        print("Student deleted\n")
    else:
        print("Student not found\n")

while True:
    print("1. Add Student")
    print("2. View Students")
    print("3. Update Student")
    print("4. Delete Student")
    print("5. Exit")

    choice = input("Enter choice: ")

    if choice == "1":
        add_student()
    elif choice == "2":
        view_students()
    elif choice == "3":
        update_student()
    elif choice == "4":
        delete_student()
    elif choice == "5":
        print("Exiting program")
        break
    else:
        print("Invalid choice\n")