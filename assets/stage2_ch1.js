(function(root){root.STAGE2_CH1_DATA={
  "course": "MATH 3260 — Linear Algebra",
  "version": "Stage 2 Chapter 1 Preview",
  "sessions": [
    {
      "section": "1.1",
      "title": "Systems of Linear Equations",
      "focus": "Recognize, verify, solve, classify, and parameterize linear systems.",
      "problems": [
        {
          "id": "1.1a",
          "difficulty": "Easy",
          "prompt": "Which equation is linear in the listed variables?",
          "type": "choice",
          "options": [
            {
              "value": "a",
              "label": "$3x-4y+z=21$"
            },
            {
              "value": "b",
              "label": "$xy+z=9$"
            },
            {
              "value": "c",
              "label": "$1/x+y=4$"
            },
            {
              "value": "d",
              "label": "$x^2+y=7$"
            }
          ],
          "answer": "a",
          "hint": "Variables in a linear equation appear only to the first power and are not multiplied together or placed in denominators.",
          "solution": "**Step 1.** A linear equation may contain constants times variables, but no products of variables, powers such as $x^2$, or variables in denominators. **Step 2.** $3x-4y+z=21$ meets these conditions. **Step 3.** The other choices contain $xy$, $1/x$, or $x^2$. Therefore the linear equation is $3x-4y+z=21$.",
          "similar": {
            "prompt": "Which equation is linear?",
            "type": "choice",
            "options": [
              {
                "value": "a",
                "label": "$u^2+v=5$"
              },
              {
                "value": "b",
                "label": "$2u-3v=8$"
              },
              {
                "value": "c",
                "label": "$uv=6$"
              },
              {
                "value": "d",
                "label": "$1/u+v=2$"
              }
            ],
            "answer": "b",
            "solution": "Only $2u-3v=8$ keeps every variable to the first power with no products or denominators."
          }
        },
        {
          "id": "1.1b",
          "difficulty": "Easy",
          "prompt": "Does $(4,5)$ solve $$x+y=9,\\qquad 2x-y=3?$$",
          "type": "choice",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            }
          ],
          "answer": "yes",
          "hint": "Substitute $x=4$ and $y=5$ into both equations.",
          "solution": "**Step 1.** $4+5=9$, so the first equation is satisfied. **Step 2.** $2(4)-5=8-5=3$, so the second equation is satisfied. **Step 3.** Since both equations hold, $(4,5)$ is a solution.",
          "similar": {
            "prompt": "Does $(3,2)$ solve $$x+y=5,\\qquad 3x-y=7?$$",
            "type": "choice",
            "options": [
              {
                "value": "yes",
                "label": "Yes"
              },
              {
                "value": "no",
                "label": "No"
              }
            ],
            "answer": "yes",
            "solution": "$3+2=5$ and $3(3)-2=7$, so both equations are satisfied."
          }
        },
        {
          "id": "1.1c",
          "difficulty": "Medium",
          "prompt": "Solve $$x+y=20,\\qquad x-y=2.$$ Enter $(x,y)$.",
          "type": "vector",
          "answer": [
            11,
            9
          ],
          "labels": [
            "x",
            "y"
          ],
          "hint": "Add the equations first.",
          "solution": "**Step 1.** Add the equations: $2x=22$. **Step 2.** Thus $x=11$. **Step 3.** Substitute into $x+y=20$: $11+y=20$, so $y=9$. Therefore $(x,y)=(11,9)$.",
          "similar": {
            "prompt": "Solve $$x+y=18,\\qquad x-y=4.$$ Enter $(x,y)$.",
            "type": "vector",
            "answer": [
              11,
              7
            ],
            "labels": [
              "x",
              "y"
            ],
            "solution": "Adding gives $2x=22$, so $x=11$. Then $11+y=18$, so $y=7$."
          }
        },
        {
          "id": "1.1d",
          "difficulty": "Medium",
          "prompt": "Classify $$2x+4y=20,\\qquad x+2y=12.$$",
          "type": "choice",
          "options": [
            {
              "value": "one",
              "label": "Exactly one solution"
            },
            {
              "value": "none",
              "label": "No solution"
            },
            {
              "value": "inf",
              "label": "Infinitely many solutions"
            }
          ],
          "answer": "none",
          "hint": "Divide the first equation by $2$.",
          "solution": "**Step 1.** The first equation becomes $x+2y=10$. **Step 2.** The second is $x+2y=12$. **Step 3.** The same left-hand side cannot equal two different constants. The lines are parallel, so there is no solution.",
          "similar": {
            "prompt": "Classify $$3x+6y=18,\\qquad x+2y=6.$$",
            "type": "choice",
            "options": [
              {
                "value": "one",
                "label": "Exactly one solution"
              },
              {
                "value": "none",
                "label": "No solution"
              },
              {
                "value": "inf",
                "label": "Infinitely many solutions"
              }
            ],
            "answer": "inf",
            "solution": "The first equation is exactly three times the second, so both equations describe the same line."
          }
        },
        {
          "id": "1.1e",
          "difficulty": "Medium",
          "prompt": "Choose a correct parametric description of $$x-y+2z=9.$$",
          "type": "choice",
          "options": [
            {
              "value": "a",
              "label": "$x=9+s-2t,\\ y=s,\\ z=t$"
            },
            {
              "value": "b",
              "label": "$x=9-s+2t,\\ y=s,\\ z=t$"
            },
            {
              "value": "c",
              "label": "$x=s,\\ y=t,\\ z=9-s+t$"
            }
          ],
          "answer": "a",
          "hint": "Let $y=s$ and $z=t$.",
          "solution": "**Step 1.** Let $y=s$ and $z=t$. **Step 2.** Solve for $x$: $x=9+y-2z$. **Step 3.** Substitute the parameters: $x=9+s-2t$. Thus the correct parameterization is $x=9+s-2t$, $y=s$, $z=t$.",
          "similar": {
            "prompt": "Choose a parametric form for $$x+y-z=6.$$",
            "type": "choice",
            "options": [
              {
                "value": "a",
                "label": "$x=6-s+t,\\ y=s,\\ z=t$"
              },
              {
                "value": "b",
                "label": "$x=6+s-t,\\ y=s,\\ z=t$"
              }
            ],
            "answer": "a",
            "solution": "Let $y=s$ and $z=t$. Then $x=6-y+z=6-s+t$."
          }
        },
        {
          "id": "1.1f",
          "difficulty": "Slightly challenging",
          "prompt": "Solve $$\\begin{cases}x+y+z=12,\\\\2x-y+z=7,\\\\x+2y-z=6.\\end{cases}$$ Enter $(x,y,z)$.",
          "type": "vector",
          "answer": [
            3,
            4,
            5
          ],
          "labels": [
            "x",
            "y",
            "z"
          ],
          "hint": "Subtract the first equation from each of the other two.",
          "solution": "**Step 1.** Equation 2 minus Equation 1 gives $x-2y=-5$. **Step 2.** Equation 3 minus Equation 1 gives $y-2z=-6$. **Step 3.** Hence $y=2z-6$ and $x=2y-5=4z-17$. **Step 4.** Substitute into $x+y+z=12$: $7z-23=12$, so $z=5$. **Step 5.** Then $y=4$ and $x=3$. Therefore $(x,y,z)=(3,4,5)$.",
          "similar": {
            "prompt": "Solve $$\\begin{cases}x+y+z=9,\\\\2x-y+z=5,\\\\x+2y-z=4.\\end{cases}$$ Enter $(x,y,z)$.",
            "type": "vector",
            "answer": [
              2,
              3,
              4
            ],
            "labels": [
              "x",
              "y",
              "z"
            ],
            "solution": "Elimination gives $(x,y,z)=(2,3,4)$."
          }
        }
      ]
    },
    {
      "section": "1.2",
      "title": "Gaussian and Gauss–Jordan Elimination",
      "focus": "Construct augmented matrices, apply row operations, interpret RREF, and solve by row reduction.",
      "problems": [
        {
          "id": "1.2a",
          "difficulty": "Easy",
          "prompt": "For $$A=\\begin{bmatrix}1&9&20\\\\21&4&7\\end{bmatrix},$$ enter $(\\text{rows},\\text{columns},a_{23})$.",
          "type": "vector",
          "answer": [
            2,
            3,
            7
          ],
          "labels": [
            "rows",
            "columns",
            "a23"
          ],
          "hint": "$a_{23}$ means row 2, column 3.",
          "solution": "**Step 1.** $A$ has $2$ rows and $3$ columns. **Step 2.** Row 2, column 3 contains $7$. Therefore the answer is $(2,3,7)$.",
          "similar": {
            "prompt": "For $$B=\\begin{bmatrix}2&5\\\\7&1\\\\4&9\\end{bmatrix},$$ enter $(\\text{rows},\\text{columns},b_{32})$.",
            "type": "vector",
            "answer": [
              3,
              2,
              9
            ],
            "labels": [
              "rows",
              "columns",
              "b32"
            ],
            "solution": "$B$ is $3\\times2$, and $b_{32}=9$."
          }
        },
        {
          "id": "1.2b",
          "difficulty": "Easy",
          "prompt": "Write the augmented matrix for $$\\begin{cases}x-2y+z=9,\\\\3x+y-4z=20.\\end{cases}$$",
          "type": "matrix",
          "answer": [
            [
              1,
              -2,
              1,
              9
            ],
            [
              3,
              1,
              -4,
              20
            ]
          ],
          "hint": "Put the coefficients of $x,y,z$ first and constants last.",
          "solution": "The first equation gives row $(1,-2,1\\mid9)$ and the second gives $(3,1,-4\\mid20)$. Hence $$\\begin{bmatrix}1&-2&1&9\\\\3&1&-4&20\\end{bmatrix}.$$",
          "similar": {
            "prompt": "Write the augmented matrix for $$\\begin{cases}2x+y=5,\\\\-x+3y=4.\\end{cases}$$",
            "type": "matrix",
            "answer": [
              [
                2,
                1,
                5
              ],
              [
                -1,
                3,
                4
              ]
            ],
            "solution": "Use coefficient rows $(2,1)$ and $(-1,3)$ and append $5$ and $4$."
          }
        },
        {
          "id": "1.2c",
          "difficulty": "Medium",
          "prompt": "Apply $R_2\\leftarrow R_2-2R_1$ to $$\\begin{bmatrix}1&2&-1&3\\\\2&5&1&8\\end{bmatrix}.$$",
          "type": "matrix",
          "answer": [
            [
              1,
              2,
              -1,
              3
            ],
            [
              0,
              1,
              3,
              2
            ]
          ],
          "hint": "Compute the new second row entry by entry.",
          "solution": "Keep $R_1$. For $R_2$, compute $(2,5,1,8)-2(1,2,-1,3)=(0,1,3,2)$. The result is $$\\begin{bmatrix}1&2&-1&3\\\\0&1&3&2\\end{bmatrix}.$$",
          "similar": {
            "prompt": "Apply $R_2\\leftarrow R_2-3R_1$ to $$\\begin{bmatrix}1&-1&2\\\\3&2&7\\end{bmatrix}.$$",
            "type": "matrix",
            "answer": [
              [
                1,
                -1,
                2
              ],
              [
                0,
                5,
                1
              ]
            ],
            "solution": "$R_2-3R_1=(3,2,7)-(3,-3,6)=(0,5,1)$."
          }
        },
        {
          "id": "1.2d",
          "difficulty": "Medium",
          "prompt": "Use one elimination step on $$\\begin{bmatrix}1&2&1&4\\\\2&5&3&10\\end{bmatrix}$$ to make the entry below the first pivot zero.",
          "type": "matrix",
          "answer": [
            [
              1,
              2,
              1,
              4
            ],
            [
              0,
              1,
              1,
              2
            ]
          ],
          "hint": "Use $R_2\\leftarrow R_2-2R_1$.",
          "solution": "$R_2\\leftarrow R_2-2R_1$ gives $(2,5,3,10)-(2,4,2,8)=(0,1,1,2)$. Therefore $$\\begin{bmatrix}1&2&1&4\\\\0&1&1&2\\end{bmatrix}.$$",
          "similar": {
            "prompt": "Apply $R_2\\leftarrow R_2-2R_1$ to $$\\begin{bmatrix}1&1&2&5\\\\2&3&5&12\\end{bmatrix}.$$",
            "type": "matrix",
            "answer": [
              [
                1,
                1,
                2,
                5
              ],
              [
                0,
                1,
                1,
                2
              ]
            ],
            "solution": "The new second row is $(0,1,1,2)$."
          }
        },
        {
          "id": "1.2e",
          "difficulty": "Medium",
          "prompt": "An RREF contains the row $$[\\,0\\;0\\;0\\mid 1\\,].$$ What does this imply?",
          "type": "choice",
          "options": [
            {
              "value": "one",
              "label": "A unique solution"
            },
            {
              "value": "inf",
              "label": "Infinitely many solutions"
            },
            {
              "value": "none",
              "label": "No solution"
            }
          ],
          "answer": "none",
          "hint": "Translate the row into an equation.",
          "solution": "The row means $0=1$, which is impossible. Hence the system is inconsistent and has no solution.",
          "similar": {
            "prompt": "An RREF has two pivots, three variable columns, and no contradictory row. What follows?",
            "type": "choice",
            "options": [
              {
                "value": "one",
                "label": "Exactly one solution"
              },
              {
                "value": "inf",
                "label": "Infinitely many solutions"
              },
              {
                "value": "none",
                "label": "No solution"
              }
            ],
            "answer": "inf",
            "solution": "Three variables but only two pivots means at least one free variable; with no contradiction, there are infinitely many solutions."
          }
        },
        {
          "id": "1.2f",
          "difficulty": "Slightly challenging",
          "prompt": "Find the RREF of the augmented matrix for $$\\begin{cases}x+y+z=6,\\\\2x+y-z=1,\\\\x-y+2z=5.\\end{cases}$$",
          "type": "matrix",
          "answer": [
            [
              1,
              0,
              0,
              1
            ],
            [
              0,
              1,
              0,
              2
            ],
            [
              0,
              0,
              1,
              3
            ]
          ],
          "hint": "Eliminate $x$ from Rows 2 and 3 first.",
          "solution": "Start with $$\\begin{bmatrix}1&1&1&6\\\\2&1&-1&1\\\\1&-1&2&5\\end{bmatrix}.$$ Use $R_2-2R_1$ and $R_3-R_1$ to get $$\\begin{bmatrix}1&1&1&6\\\\0&-1&-3&-11\\\\0&-2&1&-1\\end{bmatrix}.$$ Continue row reduction to obtain pivots in all three variable columns. The unique solution is $(1,2,3)$, so the RREF is $$\\begin{bmatrix}1&0&0&1\\\\0&1&0&2\\\\0&0&1&3\\end{bmatrix}.$$",
          "similar": {
            "prompt": "Enter the RREF corresponding to the unique solution $(2,3,4)$.",
            "type": "matrix",
            "answer": [
              [
                1,
                0,
                0,
                2
              ],
              [
                0,
                1,
                0,
                3
              ],
              [
                0,
                0,
                1,
                4
              ]
            ],
            "solution": "With pivots in all three variables, the RREF is $[I_3\\mid(2,3,4)^T]$."
          }
        }
      ]
    },
    {
      "section": "1.3",
      "title": "Applications of Linear Systems",
      "focus": "Build interpolation and flow models and interpret their solutions.",
      "problems": [
        {
          "id": "1.3a",
          "difficulty": "Easy",
          "prompt": "Find the line $y=mx+b$ through $(2,21)$ and $(5,9)$. Enter $(m,b)$.",
          "type": "vector",
          "answer": [
            -4,
            29
          ],
          "labels": [
            "m",
            "b"
          ],
          "hint": "Compute the slope first.",
          "solution": "**Step 1.** $m=(9-21)/(5-2)=-12/3=-4$. **Step 2.** Use $(2,21)$: $21=-4(2)+b$, so $b=29$. Thus $y=-4x+29$.",
          "similar": {
            "prompt": "Find the line through $(1,8)$ and $(4,2)$. Enter $(m,b)$.",
            "type": "vector",
            "answer": [
              -2,
              10
            ],
            "labels": [
              "m",
              "b"
            ],
            "solution": "$m=-2$ and $8=-2(1)+b$, so $b=10$."
          }
        },
        {
          "id": "1.3b",
          "difficulty": "Easy",
          "prompt": "A node receives $50$ units from outside and sends flows $x_1$ and $x_2$ outward. Which conservation equation is correct?",
          "type": "choice",
          "options": [
            {
              "value": "a",
              "label": "$x_1+x_2=50$"
            },
            {
              "value": "b",
              "label": "$x_1-x_2=50$"
            },
            {
              "value": "c",
              "label": "$50+x_1=x_2$"
            }
          ],
          "answer": "a",
          "hint": "At a balanced node, inflow equals outflow.",
          "solution": "The total inflow is $50$ and total outflow is $x_1+x_2$. Therefore conservation gives $x_1+x_2=50$.",
          "similar": {
            "prompt": "A node receives $36$ units and sends flows $u$ and $v$ outward. Choose the conservation equation.",
            "type": "choice",
            "options": [
              {
                "value": "a",
                "label": "$u+v=36$"
              },
              {
                "value": "b",
                "label": "$u-v=36$"
              }
            ],
            "answer": "a",
            "solution": "Total outflow $u+v$ must equal inflow $36$."
          }
        },
        {
          "id": "1.3c",
          "difficulty": "Medium",
          "prompt": "Find $p(x)=ax^2+bx+c$ through $(0,1)$, $(1,9)$, and $(2,21)$. Enter $(a,b,c)$.",
          "type": "vector",
          "answer": [
            2,
            6,
            1
          ],
          "labels": [
            "a",
            "b",
            "c"
          ],
          "hint": "Use $p(0)=1$ first.",
          "solution": "$p(0)=1$ gives $c=1$. Then $p(1)=9$ gives $a+b=8$, while $p(2)=21$ gives $2a+b=10$. Subtract to get $a=2$, then $b=6$. Thus $(a,b,c)=(2,6,1)$.",
          "similar": {
            "prompt": "Find $p(x)=ax^2+bx+c$ through $(0,2)$, $(1,7)$, $(2,16)$.",
            "type": "vector",
            "answer": [
              2,
              3,
              2
            ],
            "labels": [
              "a",
              "b",
              "c"
            ],
            "solution": "$c=2$, $a+b=5$, and $2a+b=7$, so $a=2$, $b=3$."
          }
        },
        {
          "id": "1.3d",
          "difficulty": "Medium",
          "prompt": "For $$x_1+x_2=50,\\qquad x_1+10=x_3,\\qquad x_2+x_3=60,$$ choose the correct family when $t=x_1$.",
          "type": "choice",
          "options": [
            {
              "value": "a",
              "label": "$x_1=t,\\ x_2=50-t,\\ x_3=t+10$"
            },
            {
              "value": "b",
              "label": "$x_1=t,\\ x_2=50+t,\\ x_3=t-10$"
            }
          ],
          "answer": "a",
          "hint": "Solve the first two equations for $x_2$ and $x_3$.",
          "solution": "Set $x_1=t$. Then $x_2=50-t$ and $x_3=t+10$. The third equation becomes $(50-t)+(t+10)=60$, so it is automatically satisfied.",
          "similar": {
            "prompt": "For $$u+v=40,\\qquad u+5=w,\\qquad v+w=45,$$ choose the family when $t=u$.",
            "type": "choice",
            "options": [
              {
                "value": "a",
                "label": "$u=t,\\ v=40-t,\\ w=t+5$"
              },
              {
                "value": "b",
                "label": "$u=t,\\ v=40+t,\\ w=t-5$"
              }
            ],
            "answer": "a",
            "solution": "$v=40-t$ and $w=t+5$."
          }
        },
        {
          "id": "1.3e",
          "difficulty": "Medium",
          "prompt": "For $x_1=t$, $x_2=50-t$, $x_3=t+10$, which range keeps all flows nonnegative?",
          "type": "choice",
          "options": [
            {
              "value": "a",
              "label": "$0\\le t\\le50$"
            },
            {
              "value": "b",
              "label": "$t\\ge50$"
            },
            {
              "value": "c",
              "label": "$-10\\le t\\le0$"
            }
          ],
          "answer": "a",
          "hint": "Require each flow to be at least zero.",
          "solution": "$t\\ge0$, $50-t\\ge0$ gives $t\\le50$, and $t+10\\ge0$ is weaker than $t\\ge0$. Hence $0\\le t\\le50$.",
          "similar": {
            "prompt": "For $u=t$, $v=40-t$, $w=t+5$, which range keeps all flows nonnegative?",
            "type": "choice",
            "options": [
              {
                "value": "a",
                "label": "$0\\le t\\le40$"
              },
              {
                "value": "b",
                "label": "$t\\ge40$"
              },
              {
                "value": "c",
                "label": "$-5\\le t\\le0$"
              }
            ],
            "answer": "a",
            "solution": "$t\\ge0$ and $40-t\\ge0$ imply $0\\le t\\le40$."
          }
        },
        {
          "id": "1.3f",
          "difficulty": "Slightly challenging",
          "prompt": "A group buys adult, student, and senior tickets. They buy $30$ tickets total, $18$ are adult-or-senior tickets, and the total cost is $300$ when prices are $12$, $8$, and $10$. Enter $(x,y,z)$.",
          "type": "vector",
          "answer": [
            12,
            12,
            6
          ],
          "labels": [
            "adult x",
            "student y",
            "senior z"
          ],
          "hint": "Use $x+y+z=30$, $x+z=18$, and $12x+8y+10z=300$.",
          "solution": "From $x+y+z=30$ and $x+z=18$, we get $y=12$. Then $12x+8(12)+10z=300$, so $12x+10z=204$. Subtract $10(x+z)=180$ to obtain $2x=24$, so $x=12$ and $z=6$. Thus $(x,y,z)=(12,12,6)$.",
          "similar": {
            "prompt": "A club buys $20$ passes: standard $x$, student $y$, guest $z$. Suppose $x+z=12$ and prices are $10$, $6$, $8$, with total cost $164$. Enter $(x,y,z)$.",
            "type": "vector",
            "answer": [
              10,
              8,
              2
            ],
            "labels": [
              "x",
              "y",
              "z"
            ],
            "solution": "$y=8$. Then $10x+8z=116$ and $x+z=12$, giving $x=10$, $z=2$."
          }
        }
      ]
    }
  ]
};if(typeof module!=='undefined'&&module.exports)module.exports=root.STAGE2_CH1_DATA;})(typeof window!=='undefined'?window:globalThis);
