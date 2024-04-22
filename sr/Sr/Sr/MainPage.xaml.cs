using Microsoft.Maui;
using Microsoft.Maui.Controls;
using System;

namespace MAUIApp
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();

            // Task 1
            button1.Clicked += (sender, e) =>
            {
                int a = int.Parse(entryA.Text);
                int b = int.Parse(entryB.Text);
                int product = CalculateProductOfMultiplesOfSeven(a, b);
                label1.Text = $"Добуток чисел, кратних 7 і менших 30 на проміжку [{a}, {b}]: {product}";
            };

            // Task 2
            button2.Clicked += (sender, e) =>
            {
                int num1 = int.Parse(entryNum1.Text);
                int num2 = int.Parse(entryNum2.Text);
                int num3 = int.Parse(entryNum3.Text);
                int result = CalculateResult(num1, num2, num3);
                label2.Text = $"Результат: {result}";
            };
        }

        private int CalculateProductOfMultiplesOfSeven(int a, int b)
        {
            int product = 1;
            for (int i = a; i <= b; i++)
            {
                if (i % 7 == 0 && i < 30)
                {
                    product *= i;
                }
            }
            return product;
        }

        private int CalculateResult(int num1, int num2, int num3)
        {
            if (num1 % 5 == 0 && num2 % 5 == 0 && num3 % 5 == 0)
            {
                return num1 + num2 + num3;
            }
            else
            {
                int sum = num1 + num2 + num3;
                return sum * sum * sum;
            }
        }
    }
}