class Solution {
public:
    int trap(vector<int>& height) {
        int maxL = 0;
        int maxR = 0;

        int l = 0;
        int r = height.size()-1;

        int trapped = 0;

        while(l<r)
        {
            if(height[l] < height[r])
            {
                maxL = max(maxL, height[l]);
                trapped += maxL - height[l];
                l++;
            }
            else
            {
                maxR = max(maxR, height[r]);
                trapped += maxR - height[r];
                r--;
            }
        }

        return trapped;
    }
};
