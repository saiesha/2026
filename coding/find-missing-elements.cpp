class Solution {
public:
    vector<int> findMissingElements(vector<int>& nums) {
        unordered_set<int> s;
        vector<int> ans;
        int min = *(min_element(nums.begin(), nums.end()));
        int max = *(max_element(nums.begin(), nums.end()));

        for(int i = 0; i < nums.size(); i++)
        s.insert(nums[i]);

        for(int i = min+1; i < max; i++)
        {
            if(s.find(i) == s.end())
            {
                ans.push_back(i);
            }
        }

        sort(ans.begin(), ans.end());

        return ans;
    }
};
