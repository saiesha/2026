class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> answer;
        answer.resize(temperatures.size());
        stack<int> st;

        for(int i = 0; i < temperatures.size(); i++)
        {
            if((!st.empty())&&(temperatures[i] <= temperatures[st.top()]))
            st.push(i);
            else
            {
                //as long as you have a lesser top - pop it while calculating answer for that index and push once u have popped rightly.

                while((!st.empty()) && (temperatures[i] > temperatures[st.top()]))
                {
                    answer[st.top()] = i - st.top();
                    st.pop();
                }

                st.push(i);
            }


        }

        return answer;
    }
};
