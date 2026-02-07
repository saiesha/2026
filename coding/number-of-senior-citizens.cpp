class Solution {
public:
    int countSeniors(vector<string>& details) {
        int count = 0;
        int num = details.size();

        for(int i = 0; i < num; i++)
        {
            int age = 10*(details[i][11] - '0') + details[i][12] - '0';
            if(age > 60)
            {
                count++;
            }
        }
        return count;
    }
};
