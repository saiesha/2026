class Solution {
public:
    int pivotInteger(int n) {
        if(n == 1)
        return 1;

        int sumL[n+1], sumR[n+1];
        sumL[1] = 1;
        sumR[n] = n;
        for(int i = 2; i <= n; i++)
        {
            sumL[i] = i + sumL[i-1];
        }
        for(int i = n-1; i >= 1; i--)
        {
            sumR[i] = i + sumR[i+1];
        }

        //traverse
        for(int i = 1; i <= n; i++)
        {
            if(sumR[i] == sumL[i])
            {
                return i;
            }
        }

        return -1;
    }
};
