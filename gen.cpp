/*input

*/

#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
#define mp make_pair
#define el '\n'
#define pb push_back
#define pp push
#define inf 1000000007

char n[1005];

void changee(int i)
{
	n[1]='0'+i/10;
	n[2]='0'+i%10;
}

void change(int i)
{
	n[1]='0'+i;
}

int main()
{
	n[0]='p';
	n[1]='1';
	n[2]='.';
	n[3]='h';
	n[4]='t';
	n[5]='m';
	n[6]='l';
	for(int i=1;i<=9;i++)
	{
		change(i);
		freopen(n,"w",stdout);
	}
	n[0]='p';
	n[1]='1';
	n[2]='0';
	n[3]='.';
	n[4]='h';
	n[5]='t';
	n[6]='m';
	n[7]='l';
	for(int i=10;i<=30;i++)
	{
		changee(i);
		freopen(n,"w",stdout);
	}
}