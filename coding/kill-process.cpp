class Solution {
public:
    vector<int> killProcess(vector<int>& pid, vector<int>& ppid, int kill) {
        unordered_set<int> ans;
        ans.insert(kill);
        unordered_map<int, unordered_set<int>> mp;

        //1. traverse through the ppid vector
        for(int i = 0; i < ppid.size(); i++)
        {
            if(ppid[i] != 0)
            {
                mp[ppid[i]].insert(pid[i]);
            }
        }

        vector<int> st;
        st.push_back(kill);

        for(int i = 0; i < st.size(); i++)
        {
            int curr = st[i];

            for(auto child: mp[curr])
            {
                ans.insert(child);
                st.push_back(child);
            }
        }


        return vector<int>(ans.begin(), ans.end());
    }
};
