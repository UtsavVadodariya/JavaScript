// Q.1 Write a Program to find the sum of all 1D Array elements by passing an array as an argument using UDF.
// For example,
// Input:
// Enter array size: 5
// Enter array elements:
// a[0] = 6
// a[1] = 4
// a[2] = 1
// a[3] = 5
// a[4] = 2

// Output:
// The sum of an Array: 18

#include<stdio.h>
int main()
{
    int a;

    printf("Enter Size Of Array :");
    scanf("%d",&a);

    int arr[a],sum=0;

    for (int i = 0; i < a; i++)
    {
        printf("Enter Value Of Array :");
        scanf("%d",&arr[i]);

        sum += arr[i];
    }
    printf("The Sum of an Array :%d",sum);
    
}