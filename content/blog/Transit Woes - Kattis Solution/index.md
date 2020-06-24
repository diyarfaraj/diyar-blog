---
title: "Kattis solution C#: Transit Woes"
tags: ["csharp", "dotnet"]
published: true
date: "2020-06-03"
---

Ok, Yraglac's [Transit Woes](https://open.kattis.com/problems/transitwoes) is definitely on the easiest problems in the whole Kattis problems register. 

But somehow I got stuck on this for quite some time. Specifically on the fourth input line about the arrivals, it goes like this:

*The fourth line contains n space separated integers Ci (1≤Ci≤1000) denoting the intervals the i-th bus arrives.*

I'm well aware that my solution below is far from perfect in a sense of that algorithmic thinking that most Kattis problems are aiming for. 

I would love to hear some feedback if you somehow end up here. You can find more solutions at [this Github repo](https://github.com/diyarfaraj/kattis) of mine. 

Still, it felt great once the it passed all the tests, here it is:


```csharp
using System;
using System.Collections.Generic;
using System.Linq;


    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');

            int s = int.Parse(input[0]);
            int t = int.Parse(input[1]);
            int n = int.Parse(input[2]);

            string[] input2 = Console.ReadLine().Split(' ');
            List<int> walks = new List<int>();
            foreach (var item in input2)
            {
                walks.Add(int.Parse(item));
                walks.Take(n + 1);
            }

            string[] input3 = Console.ReadLine().Split(' ');
            List<int> drives = new List<int>();
            foreach (var item in input3)
            {
                drives.Add(int.Parse(item));
                drives.Take(n);
            }

            string[] input4 = Console.ReadLine().Split(' ');
            List<int> arrivals = new List<int>();
            foreach (var item in input4)
            {
                arrivals.Add(int.Parse(item));
                arrivals.Take(n);


            }
            List<int> arrivalArr = new List<int>();
            for (int i = 0; i < arrivals.Count; ++i)
            {
                int diff = i == 0 ? arrivals[0] - 1 : arrivals[i] - arrivals[i - 1];

                arrivalArr.Add(diff);
                
            }

            s += walks.Sum();
            s += drives.Sum();
            s += arrivalArr.Sum();


            if (s > t)
            {
                Console.WriteLine("no");
            }
            else
            {
                Console.WriteLine("yes");
            }

            Console.ReadLine();
        }

    }

```
  

