class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int maxG = 0;
        int maxL = (nums.size()?1:0);

        sort(nums.begin(), nums.end());

        for(int i = 1; i < nums.size(); i++)
        {
            if(nums[i-1] == nums[i])
            {
                continue;
            }
            if((nums[i-1] + 1) == (nums[i]))
            {
                maxL++;
            }
            else
            {
                maxG = max(maxL, maxG);
                maxL = 1;
            }
        }
        return max(maxG, maxL);
    }
};
