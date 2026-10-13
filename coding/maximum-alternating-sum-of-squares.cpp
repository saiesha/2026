class Solution {
public:
    long long maxAlternatingSum(vector<int>& nums) {
        // 1. Make every element non-negative i.e zero + positive values only as the numbers are squared.
        // 2. sort the array/vector
        // 3. Use two pointers - left and right and take the left and right values.
        // and calculate the sum.
        int len = nums.size();
        long long sum = 0;
        int left = 0;
        int right = len-1;

        for(int i = 0; i < len; i++)
        {
            nums[i] = abs(nums[i]);
        }

        sort(nums.begin(), nums.end());

        while(left < right)
        {
            sum += pow(nums[right],2) - pow(nums[left],2);
            left++;
            right--;
        }

        if(left == right)
        sum += pow(nums[right],2);

        return sum;
    }
};
