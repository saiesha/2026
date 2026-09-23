class Solution {
public:
    bool isPalindrome(string s) {
        unsigned int left = 0;
        unsigned int right = s.length()-1;

        while(left < right)
        {
            if(!isalnum(s[left]))
            {
                left++;
            }
            else if(!isalnum(s[right]))
            {
                right--;
            }
            else if((s[left]==s[right])||(toupper(s[left])==toupper(s[right])))
            {
                left++;
                right--;
            }
            else
            return false;
        }

        return true;
    }
};
