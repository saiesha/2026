class Solution {
public:
    bool isSelfDividing(int num)
    {
        int temp = num;
        while(num)
        {
            int rem = num%10;

            if(rem == 0 || (temp%(num%10) != 0))
            return false;

            num/=10;
        }

        return true;
    }
    vector<int> selfDividingNumbers(int left, int right) {
        vector<int> ans;
        for(int i = left; i<= right; i++)
        {
            if(isSelfDividing(i))
            ans.push_back(i);
        }

        return ans;
    }
};
