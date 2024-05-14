// Q.2 Write a Program to find the length of the String by passing a string as an argument using UDF.For example,
// Input:
// Enter any string: development

// Output:
// Length is: 11

#include <stdio.h>

int main() {
    char input[100];
    int length = 0;

    printf("Enter any string: ");
    scanf("%s", input);

    while (input[length] != '\0') {
        length++;
    }

    printf("Length is: %d\n", length);

}
