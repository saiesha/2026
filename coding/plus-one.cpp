class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int check = 1;
        for(int i = digits.size() - 1; i >= 0; i--)
        {
            if(!check)
            break;

            if((digits[i] >= 0) && (digits[i] < 9))
            {
                digits[i] = digits[i] + 1;
                check = 0;
            }
            else if(digits[i] == 9)
            {
                digits[i] = 0;
            }
        }

        if(check)
        digits.insert(digits.begin(), 1);

        return digits;
    }
};
