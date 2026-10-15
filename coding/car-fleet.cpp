class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        vector<pair<int, int>> v;
        int poslen = position.size();
        vector<double> time;
        stack<double> st;

        time.resize(poslen);

        for(int i = 0; i < poslen; i++)
        {
            v.push_back({position[i], speed[i]});
        }

        sort(v.begin(), v.end(), greater<pair<int, int>>());
        
        for(int i = 0; i < poslen; i++)
        {
            time[i] = (double)(target - (v[i].first))/(v[i].second);
        }

        for(int i = 0; i < poslen; i++)
        {
            if((st.empty())||(st.top() < time[i]))
            st.push(time[i]);
        }

        return st.size();

    }
};
