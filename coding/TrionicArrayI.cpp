class Solution {
public:
    bool isTrionic(vector<int>& nums)
    {
        // 1. Check if the minimum elements are 4 since 0 < p < q < n-1 requires 4 elements atleast.
        // 2. Strictly increasing phase: Incase after this, return false incase the index is:
        //     a. 0 -> No increasing phrase
        //     b. n-1 -> No elements remain since you reached the end
        // 3. Store the latest value of i in some variable.
        // 4. Check the same for Strictly decreasing phase. Check incase the previously stored i matches the latest.
        //    It means there is no decreasing phase, so return false. Incase you reach the end, return false.
        // 5. Again, check strictly increasing phase. Return i==n-1. 
        //    It means: Incase you reach the end, return true. Incase you have elements to be traversed, return false.
        int len = nums.size();

        if(len < 4)
        {
            return false;
        }

        int i = 0;

        while((i < len - 1) && (nums[i] < nums[i+1]))
        {
            i++;
        }
        if(i == 0 || i == len - 1)
        {
            return false;
        }
        int dec = i;
        while((i < len - 1) && (nums[i] > nums[i+1]))
        {
            i++;
        }
        if(i == dec || i == len - 1)
        {
            return false;
        }

        while((i < len - 1) && (nums[i] < nums[i+1]))
        {
            i++;
        }

        return i==(len-1);
    }
};
