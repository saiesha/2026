class Solution {
public:
    bool containsDuplicate(vector<int>& nums)
    {
      // Solution 1: Use a set, insert elements if duplicate is not found. Incase duplicate is found -> return true. Return false otherwise.
      // Solution 2: Sort the array => sort(nums.begin(), nums.end()) => Check if consecutive elements are same i.e if nums[i] == nums[i+1] -> return true. Return false oherwise.
        unordered_set<int> s;

        for(int i = 0; i < nums.size(); i++)
        {
            if(s.find(nums[i]) != s.end())
            {
                return true;
            }
            s.insert(nums[i]);
        }
        return false;
    }
};
