var title = '39th Special BCS | Math';
var time = 30;
var mark = 1;
var negMark = 0.5;
var opLabel = ['A', 'B', 'C', 'D'];
var sheet = 'https://script.google.com/macros/s/AKfycbxFRSAiJoSIEFqcSGetUJNDhTj6eiKfbxcHd1gTzDNVbeDARAoOf0woHLpUQ5y9CNNU/exec';
var questions = [
    {
        question: '$125(\\sqrt{5})^{2x}=1$ হলে $x$ এর মান কত?',
        options: [
            '$3$',
            '$-3$',
            '$7$',
            '$9$'
        ],
        corrAns: 1,
        explanation:`$125(\\sqrt{5})^{2x} = 1 \\Rightarrow 5^{3}(\\sqrt{5})^{2x}=1$<br>
$\\Rightarrow 5^{3}.5^{2x.\\frac{1}{2}}=1$<br>
$\\Rightarrow 5^{3+x}=5^{0} \\Rightarrow 3+x=0$<br>
$\\therefore x=-3$
`
    },
    {
        question: '$\\mathrm {n_{C_{12}}} = \\mathrm {n_{C_{6}}}$ হলে $n$ এর মান কত?',
        options: [
            '$12$',
            '$14$',
            '$16$',
            '$18$'
        ],
        corrAns: 3,
        explanation:'<img width="100%" src="https://uttoron.academy/media/Images/Question/39th-bcs/4.png">'
    },
    {
        question: 'বার্ষিক শতকরা $10%$ হারে $1000$ টাকার $2$ বছর পর সরল ও চক্রবৃদ্ধি মুনাফার পার্থক্য কত?',
        options: [
            '$11$ টাকা',
            '$11.5$ টাকা',
            '$12$ টাকা',
            '$10$ টাকা'
        ],
        corrAns: 3,
        explanation:`চক্রবৃদ্ধি ক্ষেত্রে, মুনাফাসহ মূলধন,<br>
                     $A = p(1+r)^{n}$<br>
                     $ = 1000(1+\\frac{10}{100})^{2} = 1000(\\frac{11}{10})^{2} = 1210$<br>
                     $\\therefore$ মুনাফা $I_{c}=1210-1000=210$  টাকা<br>
                     সরল মুনাফার ক্ষেত্রে, $I=Pnr=\\frac{1000\\times2\\times10}{100}=200$ টাকা<br>
                    $\\therefore$ সরল ও চক্রবৃদ্ধির মুনাফার পার্থাক্য $=(210-200)=10$ টাকা
        `
    },
    {
        question: 'দুইটি সংখ্যার অনুপাত $7 : 5$ এবং তাদের ল.সা.গু. $140$ হলে সংখ্যা দুইটির গ.সা.গু. কত?',
        options: [
            '$4$',
            '$12$',
            '$6$',
            '$9$'
        ],
        corrAns: 0,
        explanation:'<img width="100%" src="https://uttoron.academy/media/Images/Question/39th-bcs/7.png">'
    },
    {
        question: '$\\mathrm {2x^{2}+5x + 3<0}$ এর সমাধান কোনটি?',
        options: [
            '$-{ {3} \\over 2}<{\\mathrm x}<-1$',
            '$-{ {3} \\over 2}<{\\mathrm x}<1$',
            '$-{ {3} \\over 2} \\mathrm {\\leq x}\\leq1$',
            '$-{ {3} \\over 2} \\mathrm {< x}\\leq1$'
        ],
        corrAns: 0,
        explanation:`$2x^{2}+5x+3<0$ <br>
$\\Rightarrow 2x^{2}+3x+2x+3<0$ <br>
$\\Rightarrow x(2x+3)+1(2x+3)<0$ <br>
$\\Rightarrow (x+1)(2x+3)<0$ <br>
$(x+1)$ $(2x+3)$ এর যেকোনো একটির মান ঋনাত্মক হলে অসমতাটি সত্য হবে।<br><br>

<table border="1" cellspacing="0" cellpadding="3px">
<tr align="center">
<td>যখন</td>
<td>$(x+1)$ এর চিহ্ন</td>
<td>$(2x+1)$ এর চিহ্ন</td>
<td>$(x+1)(2x+1)$ এর চিহ্ন</td>
</tr>
<tr align="center">
<td>$x<\\frac{-3}{2}$</td>
<td>-</td>
<td>-</td>
<td>+</td>
</tr>
<tr align="center">
<td>$\\frac{-3}{2} \\lt x \\lt -1$</td>
<td>-</td>
<td>+</td>
<td>-</td>
</tr>
<tr align="center">
<td>$x>-1$</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
</table><br><br>
$\\therefore$ নির্ণেয় অসমতা: $\\frac{-3}{2}<x<-1$`
    },
    {
        question: '$\\mathrm {c={\\{x:x}}$ ঋণাত্মক পূর্ণসংখ্যা এবং $\\mathrm {x^{2}<18\\}}$; $c$ সেটের উপাদানগুলো হবে-',
        options: [
            '$\\{1, 2, 3, 5\\}$',
            '$\\{1, 3, 5, 7\\}$',
            '$\\{2, 4, 6, 8\\}$',
            '$\\{-1, -2, -3, -4\\}$'
        ],
        corrAns: 3,
        explanation:`$x = -1, -2, -3, -4$ হলে,<br>
        এখানে, $(-1)^{2} < 18, (-2)^{2} < 18, (-3)^{2} < 18, (-4)^{2} < 18$<br>
        কিন্তু $(-5)^{2} \\nless 18$<br>
        $\\therefore C = {-1, -2, -3, -4}$
        `
    },
    {
        question: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য 18 সেমি. এবং প্রস্থ 10 সেমি.। আয়তক্ষেত্রটির দৈর্ঘ্য বৃদ্ধি করে 25 সেমি. করা হলো। আয়তক্ষেত্রটির প্রস্থ কত হলে ক্ষেত্রফল অপরিবর্তিত থাকবে?',
        options: [
            '7.2 সেমি.',
            '7.3 সেমি.',
            '7 সেমি.',
            '7.1 সেমি.'
        ],
        corrAns: 0,
        explanation:'<img width="100%" src="https://uttoron.academy/media/Images/Question/39th-bcs/14.jpg">'
    },
    {
        question: '$|1-2\\mathrm{x}|<1$ এর সমাধান-',
        options: [
            '$\\mathrm {-2 < x <1 }$',
            '$\\mathrm {-1 < x <0 }$',
            '$\\mathrm {0 < x <1 }$',
            '$\\mathrm {-1 < x <1 }$'
        ],
        corrAns: 2,
        explanation:'<img width="100%" src="https://uttoron.academy/media/Images/Question/39th-bcs/15.png">'
    },
    {
        question: '$1\\over {\\sqrt{2} {\\mathrm {}}}$, $1$, ${\\sqrt{2} {\\mathrm {}} }$ ... ... ধারাটির কোন পদ $\\mathrm 8{\\sqrt2}$ হবে?',
        options: [
            '৯তম পদ',
            '১০তম পদ',
            '১১তম পদ',
            '১২তম পদ'
        ],
        corrAns: 0,
        explanation:'<img width="100%" src="https://uttoron.academy/media/Images/Question/39th-bcs/21.jpg">'
    },
    {
        question: 'একটি দ্রব্য 180 টাকায় বিক্রয় করায় 10% ক্ষতি হলো। দ্রব্যটির ক্রয়মূল্য-',
        options: [
            '200 টাকা',
            '210 টাকা',
            '162 টাকা',
            '198 টাকা'
        ],
        corrAns: 0,
        explanation:'<img width="100%" src="https://uttoron.academy/media/Images/Question/39th-bcs/23.png">'
    },
];
