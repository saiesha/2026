#include <string>
class Solution {
public:
    int minMergedInteger(vector<int>& nums) {
        string str1 = to_string(nums[0]) + to_string(nums[1]);
        int first = stoi(str1);
        for(int i = 2; i < nums.size(); i+=2)
        {
            string str2 = "";
            str2 += to_string(nums[i]);
            str2 += to_string(nums[i+1]);

            first = min(first, stoi(str2));
        }

        return first;
    }
};
