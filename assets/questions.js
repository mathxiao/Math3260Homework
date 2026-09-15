(function(root){
  const data = {
  "course": "MATH 3260 — Linear Algebra",
  "version": "Stage 1",
  "chapters": [
    {
      "number": 1,
      "title": "Systems of Linear Equations",
      "sessions": [
        {
          "chapter": 1,
          "section": "1.1",
          "title": "Systems of Linear Equations",
          "focus": "Solve and classify linear systems.",
          "problems": [
            {
              "id": "1.1a",
              "prompt": "Solve the system\n$$x+y=5,\\qquad 2x-y=4.$$\nEnter $(x,y)$.",
              "type": "vector",
              "answer": [
                3,
                2
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Adding the equations gives $3x=9$, so $x=3$. Then $y=2$.",
              "hint": null
            },
            {
              "id": "1.1b",
              "prompt": "Classify the system\n$$x+y=2,\\qquad 2x+2y=4.$$",
              "type": "choice",
              "options": [
                {
                  "value": "one",
                  "label": "One solution"
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
              "solution": "The second equation is exactly twice the first, so both equations describe the same line.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 1,
          "section": "1.2",
          "title": "Gaussian and Gauss–Jordan Elimination",
          "focus": "Interpret row reduction and system structure.",
          "problems": [
            {
              "id": "1.2a",
              "prompt": "Find the RREF of the augmented matrix\n$$\\begin{bmatrix}1&2&5\\\\2&4&10\\end{bmatrix}.$$",
              "type": "matrix",
              "answer": [
                [
                  1,
                  2,
                  5
                ],
                [
                  0,
                  0,
                  0
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Use $R_2\\leftarrow R_2-2R_1$. The first row already has its pivot equal to $1$.",
              "hint": null
            },
            {
              "id": "1.2b",
              "prompt": "A row-reduced augmented matrix contains the row\n$$[\\,0\\;0\\;0\\mid 3\\,].$$\nWhat does this imply?",
              "type": "choice",
              "options": [
                {
                  "value": "unique",
                  "label": "The system has a unique solution"
                },
                {
                  "value": "inf",
                  "label": "The system has infinitely many solutions"
                },
                {
                  "value": "inconsistent",
                  "label": "The system is inconsistent"
                }
              ],
              "answer": "inconsistent",
              "solution": "The row represents $0=3$, which is impossible.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 1,
          "section": "1.3",
          "title": "Applications of Linear Systems",
          "focus": "Build interpolation models from data.",
          "problems": [
            {
              "id": "1.3a",
              "prompt": "A line $y=mx+b$ passes through $(1,3)$ and $(4,9)$. Find $(m,b)$.",
              "type": "vector",
              "answer": [
                2,
                1
              ],
              "labels": [
                "m",
                "b"
              ],
              "tolerance": 1e-06,
              "solution": "The slope is $(9-3)/(4-1)=2$, and $3=2(1)+b$ gives $b=1$.",
              "hint": null
            },
            {
              "id": "1.3b",
              "prompt": "Let $p(x)=a+bx+cx^2$ pass through $(0,1)$, $(1,3)$, and $(2,9)$. Find $(a,b,c)$.",
              "type": "vector",
              "answer": [
                1,
                0,
                2
              ],
              "labels": [
                "a",
                "b",
                "c"
              ],
              "tolerance": 1e-06,
              "solution": "From $p(0)=1$, $a=1$. The other equations give $b+c=2$ and $b+2c=4$, hence $c=2$ and $b=0$.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 2,
      "title": "Matrix Operations and Applications",
      "sessions": [
        {
          "chapter": 2,
          "section": "2.1",
          "title": "Operations with Matrices",
          "focus": "Multiply matrices and track dimensions.",
          "problems": [
            {
              "id": "2.1a",
              "prompt": "Compute\n$$\\begin{bmatrix}1&2\\\\0&3\\end{bmatrix}\\begin{bmatrix}2&1\\\\-1&4\\end{bmatrix}.$$",
              "type": "matrix",
              "answer": [
                [
                  0,
                  9
                ],
                [
                  -3,
                  12
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Use row-column products: for example, the $(1,2)$ entry is $1(1)+2(4)=9$.",
              "hint": null
            },
            {
              "id": "2.1b",
              "prompt": "If $A$ is $2\\times3$ and $B$ is $3\\times4$, what is the size of $AB$?",
              "type": "choice",
              "options": [
                {
                  "value": "2x4",
                  "label": "$2\\times4$"
                },
                {
                  "value": "3x3",
                  "label": "$3\\times3$"
                },
                {
                  "value": "4x2",
                  "label": "$4\\times2$"
                },
                {
                  "value": "undefined",
                  "label": "The product is undefined"
                }
              ],
              "answer": "2x4",
              "solution": "Correct choice: **$2\\times4$**.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 2,
          "section": "2.2",
          "title": "Properties of Matrix Operations",
          "focus": "Use matrix identities and matrix equations.",
          "problems": [
            {
              "id": "2.2a",
              "prompt": "Which identity is always correct when $AB$ is defined?",
              "type": "choice",
              "options": [
                {
                  "value": "ab",
                  "label": "$(AB)^T=A^TB^T$"
                },
                {
                  "value": "ba",
                  "label": "$(AB)^T=B^TA^T$"
                },
                {
                  "value": "same",
                  "label": "$(AB)^T=AB$"
                }
              ],
              "answer": "ba",
              "solution": "Transpose reverses the order of multiplication.",
              "hint": null
            },
            {
              "id": "2.2b",
              "prompt": "Solve $X+A=B$ for $X$ when\n$$A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix},\\qquad B=\\begin{bmatrix}4&0\\\\5&7\\end{bmatrix}.$$",
              "type": "matrix",
              "answer": [
                [
                  3,
                  -2
                ],
                [
                  2,
                  3
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Subtract $A$ from both sides: $X=B-A$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 2,
          "section": "2.3",
          "title": "The Inverse of a Matrix",
          "focus": "Compute inverses and recognize singularity.",
          "problems": [
            {
              "id": "2.3a",
              "prompt": "Find the inverse of\n$$A=\\begin{bmatrix}2&1\\\\5&3\\end{bmatrix}.$$",
              "type": "matrix",
              "answer": [
                [
                  3,
                  -1
                ],
                [
                  -5,
                  2
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "$\\det(A)=2(3)-5(1)=1$, so $A^{-1}=\\begin{bmatrix}3&-1\\\\-5&2\\end{bmatrix}$.",
              "hint": null
            },
            {
              "id": "2.3b",
              "prompt": "If $\\det(A)=0$ for a square matrix $A$, which statement is correct?",
              "type": "choice",
              "options": [
                {
                  "value": "inv",
                  "label": "An inverse always exists"
                },
                {
                  "value": "sing",
                  "label": "The matrix is singular and has no inverse"
                },
                {
                  "value": "id",
                  "label": "The matrix must equal the identity"
                }
              ],
              "answer": "sing",
              "solution": "Correct choice: **The matrix is singular and has no inverse**.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 2,
          "section": "2.4",
          "title": "Elementary Matrices and LU Factorization",
          "focus": "Connect row operations with factorization.",
          "problems": [
            {
              "id": "2.4a",
              "prompt": "For\n$$A=\\begin{bmatrix}2&4\\\\6&15\\end{bmatrix},$$\nordinary elimination uses multiplier $m_{21}$ and produces $U_{22}$. Enter $(m_{21},U_{22})$.",
              "type": "vector",
              "answer": [
                3,
                3
              ],
              "labels": [
                "m21",
                "U22"
              ],
              "tolerance": 1e-06,
              "solution": "$m_{21}=6/2=3$. Then $R_2\\leftarrow R_2-3R_1$ gives second pivot $15-12=3$.",
              "hint": null
            },
            {
              "id": "2.4b",
              "prompt": "Give the elementary matrix that performs $R_2\\leftarrow R_2-2R_1$ on a $2\\times2$ matrix.",
              "type": "matrix",
              "answer": [
                [
                  1,
                  0
                ],
                [
                  -2,
                  1
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Apply the row operation to $I_2$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 2,
          "section": "2.5",
          "title": "Markov Chains",
          "focus": "Advance states and find steady states.",
          "problems": [
            {
              "id": "2.5a",
              "prompt": "Using the column-stochastic matrix\n$$P=\\begin{bmatrix}0.8&0.3\\\\0.2&0.7\\end{bmatrix},\\qquad x_0=\\begin{bmatrix}0.25\\\\0.75\\end{bmatrix},$$\ncompute $x_1=Px_0$.",
              "type": "vector",
              "answer": [
                0.425,
                0.575
              ],
              "labels": null,
              "tolerance": 1e-08,
              "solution": "Multiply $P$ by $x_0$: the first component is $0.8(0.25)+0.3(0.75)=0.425$.",
              "hint": null
            },
            {
              "id": "2.5b",
              "prompt": "Find the steady-state probability vector $q$ satisfying $Pq=q$ and $q_1+q_2=1$ for the same matrix.",
              "type": "vector",
              "answer": [
                0.6,
                0.4
              ],
              "labels": null,
              "tolerance": 1e-08,
              "solution": "The equation gives $0.2q_1=0.3q_2$, so $q_1=1.5q_2$. Normalization gives $(0.6,0.4)$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 2,
          "section": "2.6",
          "title": "More Applications of Matrix Operations",
          "focus": "Use Leontief and least-squares models.",
          "problems": [
            {
              "id": "2.6a",
              "prompt": "An open Leontief model has\n$$D=\\begin{bmatrix}0.2&0.1\\\\0.1&0.2\\end{bmatrix},\\qquad d=\\begin{bmatrix}70\\\\70\\end{bmatrix}.$$\nSolve $(I-D)x=d$.",
              "type": "vector",
              "answer": [
                100,
                100
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "By symmetry $x_1=x_2=x$. Then $(0.8-0.1)x=70$, so $x=100$.",
              "hint": null
            },
            {
              "id": "2.6b",
              "prompt": "Find the least-squares line $y=b_0+b_1x$ for $(1,2),(2,3),(3,5)$. Enter $(b_0,b_1)$.",
              "type": "vector",
              "answer": [
                0.3333333333333333,
                1.5
              ],
              "labels": [
                "b0",
                "b1"
              ],
              "tolerance": 1e-06,
              "solution": "Using $\\bar x=2$ and $\\bar y=10/3$, the slope is $3/2$, and $b_0=\\bar y-b_1\\bar x=1/3$.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 3,
      "title": "Determinants",
      "sessions": [
        {
          "chapter": 3,
          "section": "3.1",
          "title": "The Determinant of a Matrix",
          "focus": "Compute determinants and cofactors.",
          "problems": [
            {
              "id": "3.1a",
              "prompt": "Compute\n$$\\det\\begin{bmatrix}3&2\\\\1&4\\end{bmatrix}.$$",
              "type": "number",
              "answer": 10,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$3(4)-2(1)=10$.",
              "hint": null
            },
            {
              "id": "3.1b",
              "prompt": "For\n$$A=\\begin{bmatrix}1&2&3\\\\0&4&5\\\\1&0&6\\end{bmatrix},$$\nfind the cofactor $C_{23}$.",
              "type": "number",
              "answer": 2,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "Delete row 2 and column 3: $M_{23}=\\det\\begin{bmatrix}1&2\\\\1&0\\end{bmatrix}=-2$. Since $(-1)^{2+3}=-1$, $C_{23}=2$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 3,
          "section": "3.2",
          "title": "Determinants and Elementary Operations",
          "focus": "Track determinants through row operations.",
          "problems": [
            {
              "id": "3.2a",
              "prompt": "Suppose $\\det(A)=5$. First interchange two rows, then multiply one row by $3$. What is the new determinant?",
              "type": "number",
              "answer": -15,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "A row swap changes the sign; scaling one row by $3$ multiplies the determinant by $3$: $3(-5)=-15$.",
              "hint": null
            },
            {
              "id": "3.2b",
              "prompt": "If the third row of a square matrix equals the sum of the first two rows, what is its determinant?",
              "type": "number",
              "answer": 0,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "The rows are linearly dependent, so the determinant is zero.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 3,
          "section": "3.3",
          "title": "Properties of Determinants",
          "focus": "Use determinant product and scaling rules.",
          "problems": [
            {
              "id": "3.3a",
              "prompt": "If $\\det(A)=-2$ and $\\det(B)=3$, compute $\\det(A^2B)$.",
              "type": "number",
              "answer": 12,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$\\det(A^2B)=\\det(A)^2\\det(B)=(-2)^2(3)=12$.",
              "hint": null
            },
            {
              "id": "3.3b",
              "prompt": "If $A$ is $3\\times3$ and $\\det(A)=-1$, compute $\\det(4A)$.",
              "type": "number",
              "answer": -64,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "For an $n\\times n$ matrix, $\\det(cA)=c^n\\det(A)$. Here $4^3(-1)=-64$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 3,
          "section": "3.4",
          "title": "Applications of Determinants",
          "focus": "Apply Cramer’s Rule and determinant geometry.",
          "problems": [
            {
              "id": "3.4a",
              "prompt": "Solve by any determinant-based method:\n$$2x+y=5,\\qquad x-y=1.$$\nEnter $(x,y)$.",
              "type": "vector",
              "answer": [
                2,
                1
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "The solution is $x=2$, $y=1$; Cramer’s Rule gives the same values.",
              "hint": null
            },
            {
              "id": "3.4b",
              "prompt": "Find the area of the triangle with vertices $(0,0)$, $(4,0)$, and $(1,3)$.",
              "type": "number",
              "answer": 6,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "The base has length $4$ and the height is $3$, so the area is $\\tfrac12(4)(3)=6$.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 4,
      "title": "Vector Spaces",
      "sessions": [
        {
          "chapter": 4,
          "section": "4.1",
          "title": "Vectors in R^n",
          "focus": "Perform vector arithmetic and linear combinations.",
          "problems": [
            {
              "id": "4.1a",
              "prompt": "Let $u=(1,-2,3)$ and $v=(2,1,-1)$. Compute $2u-v$.",
              "type": "vector",
              "answer": [
                0,
                -5,
                7
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(0,\\,-5,\\,7)$$.",
              "hint": null
            },
            {
              "id": "4.1b",
              "prompt": "Find $(a,b)$ such that\n$$a(1,0,1)+b(0,1,-1)=(3,1,2).$$",
              "type": "vector",
              "answer": [
                3,
                1
              ],
              "labels": [
                "a",
                "b"
              ],
              "tolerance": 1e-06,
              "solution": "The first two coordinates immediately give $a=3$, $b=1$; the third coordinate checks: $3-1=2$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.2",
          "title": "Vector Spaces",
          "focus": "Recognize vector spaces and axiom failures.",
          "problems": [
            {
              "id": "4.2a",
              "prompt": "Which set is **not** a vector space under the usual polynomial operations?",
              "type": "choice",
              "options": [
                {
                  "value": "p2",
                  "label": "$P_2$: all polynomials of degree at most 2"
                },
                {
                  "value": "exact",
                  "label": "Polynomials of exactly degree 2"
                },
                {
                  "value": "r3",
                  "label": "$\\mathbb R^3$"
                }
              ],
              "answer": "exact",
              "solution": "The zero polynomial is not of exactly degree 2, so the set fails the zero-vector requirement.",
              "hint": null
            },
            {
              "id": "4.2b",
              "prompt": "Is $W=\\{(x,y)\\in\\mathbb R^2:x+y=0\\}$ a vector space with the usual operations?",
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
              "solution": "It contains $0$ and is closed under addition and scalar multiplication; equivalently it is the solution space of a homogeneous linear equation.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.3",
          "title": "Subspaces of Vector Spaces",
          "focus": "Apply the subspace and zero-vector tests.",
          "problems": [
            {
              "id": "4.3a",
              "prompt": "Is\n$$W=\\{(x,y,z):x-2y+z=0\\}$$\na subspace of $\\mathbb R^3$?",
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
              "solution": "Correct choice: **Yes**.",
              "hint": null
            },
            {
              "id": "4.3b",
              "prompt": "Is the plane\n$$x+2y-z=4$$\na subspace of $\\mathbb R^3$?",
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
              "answer": "no",
              "solution": "It does not contain the zero vector because $0\\neq4$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.4",
          "title": "Spanning Sets and Linear Independence",
          "focus": "Find dependence relations and test spanning.",
          "problems": [
            {
              "id": "4.4a",
              "prompt": "For\n$$v_1=(1,0,1),\\quad v_2=(0,1,1),\\quad v_3=(1,1,2),$$\nfind coefficients $(c_1,c_2,c_3)$ for a nontrivial relation $c_1v_1+c_2v_2+c_3v_3=0$. Use $c_3=-1$.",
              "type": "vector",
              "answer": [
                1,
                1,
                -1
              ],
              "labels": [
                "c1",
                "c2",
                "c3"
              ],
              "tolerance": 1e-06,
              "solution": "Since $v_3=v_1+v_2$, we have $v_1+v_2-v_3=0$.",
              "hint": null
            },
            {
              "id": "4.4b",
              "prompt": "Do $(1,0,0)$ and $(0,1,0)$ span $\\mathbb R^3$?",
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
              "answer": "no",
              "solution": "Their span is the $xy$-plane, not all of $\\mathbb R^3$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.5",
          "title": "Basis and Dimension",
          "focus": "Use basis and dimension criteria.",
          "problems": [
            {
              "id": "4.5a",
              "prompt": "Let\n$$W=\\operatorname{span}\\{(1,0,1),(0,1,1),(1,1,2)\\}.$$\nWhat is $\\dim(W)$?",
              "type": "number",
              "answer": 2,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "The third vector is the sum of the first two, while the first two are independent.",
              "hint": null
            },
            {
              "id": "4.5b",
              "prompt": "Three linearly independent vectors in $\\mathbb R^3$ automatically form a basis for $\\mathbb R^3$.",
              "type": "choice",
              "options": [
                {
                  "value": "true",
                  "label": "True"
                },
                {
                  "value": "false",
                  "label": "False"
                }
              ],
              "answer": "true",
              "solution": "An independent set of exactly $\\dim(\\mathbb R^3)=3$ vectors is a basis.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.6",
          "title": "Rank and Systems of Linear Equations",
          "focus": "Compute rank, nullity, and nullspace.",
          "problems": [
            {
              "id": "4.6a",
              "prompt": "For\n$$A=\\begin{bmatrix}1&2&0\\\\0&1&1\\\\1&3&1\\end{bmatrix},$$\nthe third row is the sum of the first two. Enter $(\\operatorname{rank}A,\\operatorname{nullity}A)$.",
              "type": "vector",
              "answer": [
                2,
                1
              ],
              "labels": [
                "rank",
                "nullity"
              ],
              "tolerance": 1e-06,
              "solution": "There are two independent rows, so rank $=2$. With three columns, nullity $=3-2=1$.",
              "hint": null
            },
            {
              "id": "4.6b",
              "prompt": "Find a basis vector for the nullspace of\n$$A=\\begin{bmatrix}1&2&0\\\\0&1&1\\end{bmatrix}.$$\nUse the free variable $x_3=1$.",
              "type": "vector",
              "answer": [
                2,
                -1,
                1
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "$x_2=-x_3=-1$ and $x_1=-2x_2=2$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.7",
          "title": "Coordinates and Change of Basis",
          "focus": "Compute coordinates and transition matrices.",
          "problems": [
            {
              "id": "4.7a",
              "prompt": "Let $B=\\{(1,1),(1,-1)\\}$. Find $[x]_B$ for $x=(4,2)$.",
              "type": "vector",
              "answer": [
                3,
                1
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Solve $a(1,1)+b(1,-1)=(4,2)$. Then $a+b=4$ and $a-b=2$, so $(a,b)=(3,1)$.",
              "hint": null
            },
            {
              "id": "4.7b",
              "prompt": "For the same basis $B$ and standard basis $E$, find $P_{E\\leftarrow B}$.",
              "type": "matrix",
              "answer": [
                [
                  1,
                  1
                ],
                [
                  1,
                  -1
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "The columns are the $E$-coordinates of the basis vectors in $B$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 4,
          "section": "4.8",
          "title": "Applications of Vector Spaces",
          "focus": "Use Wronskians and identify conics.",
          "problems": [
            {
              "id": "4.8a",
              "prompt": "Compute the Wronskian of $y_1=e^x$ and $y_2=e^{-x}$.",
              "type": "number",
              "answer": -2,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$W=e^x(-e^{-x})-e^{-x}(e^x)=-1-1=-2$.",
              "hint": null
            },
            {
              "id": "4.8b",
              "prompt": "Identify the conic\n$$\\frac{x^2}{9}+\\frac{y^2}{4}=1.$$",
              "type": "choice",
              "options": [
                {
                  "value": "ellipse",
                  "label": "Ellipse"
                },
                {
                  "value": "hyperbola",
                  "label": "Hyperbola"
                },
                {
                  "value": "parabola",
                  "label": "Parabola"
                }
              ],
              "answer": "ellipse",
              "solution": "Correct choice: **Ellipse**.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 5,
      "title": "Inner Product Spaces",
      "sessions": [
        {
          "chapter": 5,
          "section": "5.1",
          "title": "Length and Dot Product in R^n",
          "focus": "Compute norms, dot products, and orthogonality.",
          "problems": [
            {
              "id": "5.1a",
              "prompt": "Compute $\\|(3,-4)\\|_2$.",
              "type": "number",
              "answer": 5,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "Correct value: $$5$$.",
              "hint": null
            },
            {
              "id": "5.1b",
              "prompt": "Are $u=(1,2,-1)$ and $v=(2,-1,0)$ orthogonal?",
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
              "solution": "$u\\cdot v=2-2+0=0$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 5,
          "section": "5.2",
          "title": "Inner Product Spaces",
          "focus": "Compute general inner products and projections.",
          "problems": [
            {
              "id": "5.2a",
              "prompt": "For the weighted inner product\n$$\\langle u,v\\rangle=2u_1v_1+u_2v_2,$$\ncompute $\\langle(1,2),(3,-1)\\rangle$.",
              "type": "number",
              "answer": 4,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$2(1)(3)+2(-1)=6-2=4$.",
              "hint": null
            },
            {
              "id": "5.2b",
              "prompt": "Project $v=(3,4)$ onto $u=(1,0)$.",
              "type": "vector",
              "answer": [
                3,
                0
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "$\\operatorname{proj}_u v=\\frac{v\\cdot u}{u\\cdot u}u=3(1,0)=(3,0)$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 5,
          "section": "5.3",
          "title": "Orthonormal Bases and Gram–Schmidt",
          "focus": "Build orthonormal bases and use orthogonality.",
          "problems": [
            {
              "id": "5.3a",
              "prompt": "Apply Gram–Schmidt to $v_1=(1,0)$ and $v_2=(1,1)$, preserving this order. Enter the orthonormal basis as columns of a $2\\times2$ matrix.",
              "type": "matrix",
              "answer": [
                [
                  1,
                  0
                ],
                [
                  0,
                  1
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "$q_1=(1,0)$. Removing the projection of $v_2$ onto $q_1$ leaves $(0,1)$, which is already unit length.",
              "hint": null
            },
            {
              "id": "5.3b",
              "prompt": "Every orthogonal set of nonzero vectors is linearly independent.",
              "type": "choice",
              "options": [
                {
                  "value": "true",
                  "label": "True"
                },
                {
                  "value": "false",
                  "label": "False"
                }
              ],
              "answer": "true",
              "solution": "Correct choice: **True**.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 5,
          "section": "5.4",
          "title": "Mathematical Models and Least Squares",
          "focus": "Use least squares and rank-nullity.",
          "problems": [
            {
              "id": "5.4a",
              "prompt": "Find the least-squares line $y=b_0+b_1x$ for $(0,1),(1,2),(2,2)$. Enter $(b_0,b_1)$.",
              "type": "vector",
              "answer": [
                1.1666666666666667,
                0.5
              ],
              "labels": [
                "b0",
                "b1"
              ],
              "tolerance": 1e-06,
              "solution": "$\\bar x=1$, $\\bar y=5/3$. The slope is $1/2$, so $b_0=5/3-1/2=7/6$.",
              "hint": null
            },
            {
              "id": "5.4b",
              "prompt": "A $3\\times5$ matrix has rank $2$. What is its nullity?",
              "type": "number",
              "answer": 3,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "Rank-nullity gives $2+\\operatorname{nullity}=5$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 5,
          "section": "5.5",
          "title": "Applications of Inner Product Spaces",
          "focus": "Use cross products and Fourier orthogonality.",
          "problems": [
            {
              "id": "5.5a",
              "prompt": "Compute $(1,0,0)\\times(0,2,0)$.",
              "type": "vector",
              "answer": [
                0,
                0,
                2
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(0,\\,0,\\,2)$$.",
              "hint": null
            },
            {
              "id": "5.5b",
              "prompt": "On $[-\\pi,\\pi]$ with inner product $\\langle f,g\\rangle=\\int_{-\\pi}^{\\pi}f(x)g(x)\\,dx$, are $1$, $\\cos x$, and $\\sin x$ mutually orthogonal?",
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
              "solution": "Each cross inner product is zero over the symmetric interval.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 6,
      "title": "Linear Transformations",
      "sessions": [
        {
          "chapter": 6,
          "section": "6.1",
          "title": "Introduction to Linear Transformations",
          "focus": "Evaluate and recognize linear transformations.",
          "problems": [
            {
              "id": "6.1a",
              "prompt": "Let $T(x,y)=(2x-y,\\,x+3y)$. Compute $T(1,2)$.",
              "type": "vector",
              "answer": [
                0,
                7
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(0,\\,7)$$.",
              "hint": null
            },
            {
              "id": "6.1b",
              "prompt": "A map has the form $T(x)=Ax+b$ with $b\\neq0$. Can it be linear?",
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
              "answer": "no",
              "solution": "A linear map must satisfy $T(0)=0$, but here $T(0)=b\\neq0$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 6,
          "section": "6.2",
          "title": "Kernel and Range",
          "focus": "Find kernels and use rank-nullity.",
          "problems": [
            {
              "id": "6.2a",
              "prompt": "Find a basis vector for $\\ker(A)$ where\n$$A=\\begin{bmatrix}1&2&1\\\\0&1&1\\end{bmatrix}.$$\nUse $x_3=1$.",
              "type": "vector",
              "answer": [
                1,
                -1,
                1
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "From the second equation $x_2=-1$; the first gives $x_1=1$.",
              "hint": null
            },
            {
              "id": "6.2b",
              "prompt": "A linear map $T:\\mathbb R^3\\to\\mathbb R^2$ has rank $2$. Is $T$ one-to-one?",
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
              "answer": "no",
              "solution": "Rank-nullity gives nullity $=3-2=1$, so the kernel is nontrivial.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 6,
          "section": "6.3",
          "title": "Matrices for Linear Transformations",
          "focus": "Construct standard and composition matrices.",
          "problems": [
            {
              "id": "6.3a",
              "prompt": "Find the standard matrix of $T(x,y)=(x+2y,\\,3x-y)$.",
              "type": "matrix",
              "answer": [
                [
                  1,
                  2
                ],
                [
                  3,
                  -1
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "The columns are $T(e_1)=(1,3)$ and $T(e_2)=(2,-1)$.",
              "hint": null
            },
            {
              "id": "6.3b",
              "prompt": "Let $T$ have matrix $A=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ and $S$ have matrix $B=\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}$. Find the matrix of $T\\circ S$.",
              "type": "matrix",
              "answer": [
                [
                  2,
                  3
                ],
                [
                  0,
                  3
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Composition $T\\circ S$ corresponds to $AB$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 6,
          "section": "6.4",
          "title": "Transition Matrices and Similarity",
          "focus": "Convert coordinates and relate similar matrices.",
          "problems": [
            {
              "id": "6.4a",
              "prompt": "Let $B=\\{(1,1),(1,-1)\\}$ and let $C$ be the standard basis. Find $P_{C\\leftarrow B}$.",
              "type": "matrix",
              "answer": [
                [
                  1,
                  1
                ],
                [
                  1,
                  -1
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "The columns are $[b_1]_C$ and $[b_2]_C$.",
              "hint": null
            },
            {
              "id": "6.4b",
              "prompt": "Let $P=P_{C\\leftarrow B}$. If $A_B$ and $A_C$ represent the same linear transformation in bases $B$ and $C$, which relation is correct?",
              "type": "choice",
              "options": [
                {
                  "value": "one",
                  "label": "$A_C=P A_B P^{-1}$"
                },
                {
                  "value": "two",
                  "label": "$A_C=P^{-1}A_B P$"
                },
                {
                  "value": "three",
                  "label": "$A_C=A_B P$"
                }
              ],
              "answer": "one",
              "solution": "Correct choice: **$A_C=P A_B P^{-1}$**.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 6,
          "section": "6.5",
          "title": "Applications of Linear Transformations",
          "focus": "Build geometric transformation matrices.",
          "problems": [
            {
              "id": "6.5a",
              "prompt": "Find the matrix for a counterclockwise rotation by $90^\\circ$ in $\\mathbb R^2$.",
              "type": "matrix",
              "answer": [
                [
                  0,
                  -1
                ],
                [
                  1,
                  0
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Check each matrix entry carefully.",
              "hint": null
            },
            {
              "id": "6.5b",
              "prompt": "A shear has matrix $S=\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$ and is followed by uniform scaling by factor $2$. Find the composition matrix.",
              "type": "matrix",
              "answer": [
                [
                  2,
                  4
                ],
                [
                  0,
                  2
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "The scaling matrix is $2I$, so the composition is $(2I)S=2S$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 6,
          "section": "6.6",
          "title": "Kronecker Product and Structured Matrices",
          "focus": "Construct Kronecker products and dimensions.",
          "problems": [
            {
              "id": "6.6a",
              "prompt": "Compute\n$$\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}\\otimes\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}.$$",
              "type": "matrix",
              "answer": [
                [
                  0,
                  1,
                  0,
                  2
                ],
                [
                  1,
                  0,
                  2,
                  0
                ],
                [
                  0,
                  3,
                  0,
                  4
                ],
                [
                  3,
                  0,
                  4,
                  0
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Replace each entry $a_{ij}$ of the first matrix by the block $a_{ij}B$.",
              "hint": null
            },
            {
              "id": "6.6b",
              "prompt": "If $A$ is $2\\times3$ and $B$ is $4\\times2$, what is the size of $A\\otimes B$?",
              "type": "choice",
              "options": [
                {
                  "value": "8x6",
                  "label": "$8\\times6$"
                },
                {
                  "value": "6x8",
                  "label": "$6\\times8$"
                },
                {
                  "value": "8x5",
                  "label": "$8\\times5$"
                }
              ],
              "answer": "8x6",
              "solution": "Correct choice: **$8\\times6$**.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 7,
      "title": "Eigenvalues, Eigenvectors, and SVD",
      "sessions": [
        {
          "chapter": 7,
          "section": "7.1",
          "title": "Eigenvalues and Eigenvectors",
          "focus": "Compute eigenvalues and verify eigenvectors.",
          "problems": [
            {
              "id": "7.1a",
              "prompt": "Find the eigenvalues of\n$$A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}.$$\nEnter them from smallest to largest.",
              "type": "vector",
              "answer": [
                1,
                3
              ],
              "labels": [
                "small",
                "large"
              ],
              "tolerance": 1e-06,
              "solution": "$\\det(A-\\lambda I)=(2-\\lambda)^2-1=(\\lambda-1)(\\lambda-3)$.",
              "hint": null
            },
            {
              "id": "7.1b",
              "prompt": "For the same matrix, is $v=(1,1)$ an eigenvector with eigenvalue $3$?",
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
              "solution": "$A(1,1)^T=(3,3)^T=3(1,1)^T$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 7,
          "section": "7.2",
          "title": "Diagonalization",
          "focus": "Use diagonalization and recognize failure.",
          "problems": [
            {
              "id": "7.2a",
              "prompt": "If $D=\\operatorname{diag}(2,3)$, compute $D^4$.",
              "type": "matrix",
              "answer": [
                [
                  16,
                  0
                ],
                [
                  0,
                  81
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Check each matrix entry carefully.",
              "hint": null
            },
            {
              "id": "7.2b",
              "prompt": "Is $A=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ diagonalizable over $\\mathbb R$?",
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
              "answer": "no",
              "solution": "It has repeated eigenvalue $1$ but only one independent eigenvector.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 7,
          "section": "7.3",
          "title": "Symmetric Matrices and Orthogonal Diagonalization",
          "focus": "Recognize orthogonality and symmetric spectra.",
          "problems": [
            {
              "id": "7.3a",
              "prompt": "Is $Q=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$ an orthogonal matrix?",
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
              "solution": "Its columns form an orthonormal set, equivalently $Q^TQ=I$.",
              "hint": null
            },
            {
              "id": "7.3b",
              "prompt": "Find the eigenvalues of the symmetric matrix $\\operatorname{diag}(4,-2)$, smallest first.",
              "type": "vector",
              "answer": [
                -2,
                4
              ],
              "labels": [
                "small",
                "large"
              ],
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(-2,\\,4)$$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 7,
          "section": "7.4",
          "title": "Applications of Eigenvalues and Eigenvectors",
          "focus": "Use population models and quadratic forms.",
          "problems": [
            {
              "id": "7.4a",
              "prompt": "A population model uses\n$$A=\\begin{bmatrix}1.2&0.5\\\\0.4&0.8\\end{bmatrix},\\qquad x_0=\\begin{bmatrix}100\\\\50\\end{bmatrix}.$$\nCompute $x_1=Ax_0$.",
              "type": "vector",
              "answer": [
                145,
                80
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(145,\\,80)$$.",
              "hint": null
            },
            {
              "id": "7.4b",
              "prompt": "Write the symmetric matrix $A$ for the quadratic form\n$$Q(x,y)=2x^2+4xy+5y^2,$$\nso that $Q=[x\\;y]A[x\\;y]^T$.",
              "type": "matrix",
              "answer": [
                [
                  2,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "The cross term is $2a_{12}xy$, so $a_{12}=a_{21}=2$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 7,
          "section": "7.5",
          "title": "Singular Value Decomposition",
          "focus": "Compute singular values and truncations.",
          "problems": [
            {
              "id": "7.5a",
              "prompt": "Find the singular values of $A=\\operatorname{diag}(3,1)$, largest first.",
              "type": "vector",
              "answer": [
                3,
                1
              ],
              "labels": [
                "sigma1",
                "sigma2"
              ],
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(3,\\,1)$$.",
              "hint": null
            },
            {
              "id": "7.5b",
              "prompt": "Find the rank-$1$ truncated SVD approximation of $A=\\operatorname{diag}(3,1)$.",
              "type": "matrix",
              "answer": [
                [
                  3,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "Keep only the singular component associated with $\\sigma_1=3$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 7,
          "section": "7.6",
          "title": "SVD in Action: Compression and Denoising",
          "focus": "Quantify low-rank storage and error.",
          "problems": [
            {
              "id": "7.6a",
              "prompt": "A $100\\times80$ matrix is stored using a rank-$10$ SVD with $U_{10}$, $10$ singular values, and $V_{10}$. Using $k(m+n+1)$, how many scalar values are stored?",
              "type": "number",
              "answer": 1810,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$10(100+80+1)=1810$.",
              "hint": null
            },
            {
              "id": "7.6b",
              "prompt": "A matrix has singular values $10,4,1$. What is the spectral-norm error of its best rank-$1$ approximation?",
              "type": "number",
              "answer": 4,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "By Eckart–Young, $\\|A-A_1\\|_2=\\sigma_2=4$.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 8,
      "title": "Complex Vector Spaces",
      "sessions": [
        {
          "chapter": 8,
          "section": "8.1",
          "title": "Complex Numbers and Complex Matrices",
          "focus": "Perform complex arithmetic and matrix calculations.",
          "problems": [
            {
              "id": "8.1a",
              "prompt": "Compute $(2+3i)(1-2i)$.",
              "type": "complex",
              "answer": [
                8,
                -1
              ],
              "tolerance": 1e-06,
              "solution": "Expand: $2-4i+3i-6i^2=8-i$.",
              "hint": null
            },
            {
              "id": "8.1b",
              "prompt": "Compute\n$$\\det\\begin{bmatrix}1&i\\\\-i&2\\end{bmatrix}.$$",
              "type": "number",
              "answer": 1,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "The determinant is $2-i(-i)=2-1=1$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 8,
          "section": "8.2",
          "title": "Conjugates, Modulus, and Division",
          "focus": "Use conjugation in arithmetic and division.",
          "problems": [
            {
              "id": "8.2a",
              "prompt": "Find the conjugate of $3-4i$.",
              "type": "complex",
              "answer": [
                3,
                4
              ],
              "tolerance": 1e-06,
              "solution": "Correct answer: $$3+4i$$.",
              "hint": null
            },
            {
              "id": "8.2b",
              "prompt": "Compute\n$$\\frac{1+2i}{1-i}.$$",
              "type": "complex",
              "answer": [
                -0.5,
                1.5
              ],
              "tolerance": 1e-06,
              "solution": "Multiply numerator and denominator by $1+i$: $\\frac{(1+2i)(1+i)}{2}=\\frac{-1+3i}{2}$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 8,
          "section": "8.3",
          "title": "Polar Form, De Moivre, and Roots",
          "focus": "Use arguments and De Moivre’s theorem.",
          "problems": [
            {
              "id": "8.3a",
              "prompt": "Find the principal argument of $3+3i$ in radians.",
              "type": "number",
              "answer": 0.7853981633974483,
              "tolerance": 1e-06,
              "label": "Angle (radians)",
              "solution": "The point lies in Quadrant I with $\\tan\\theta=1$, so $\\theta=\\pi/4$.",
              "hint": "You may enter pi/4."
            },
            {
              "id": "8.3b",
              "prompt": "Compute\n$$\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)^3.$$",
              "type": "complex",
              "answer": [
                -1,
                0
              ],
              "tolerance": 1e-06,
              "solution": "De Moivre gives $\\cos\\pi+i\\sin\\pi=-1$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 8,
          "section": "8.4",
          "title": "Complex Vector Spaces and Inner Products",
          "focus": "Use the course complex inner-product convention.",
          "problems": [
            {
              "id": "8.4a",
              "prompt": "This course uses $\\langle u,v\\rangle=\\sum u_j\\overline{v_j}$. Compute\n$$\\langle(1+i,2),(1,i)\\rangle.$$",
              "type": "complex",
              "answer": [
                1,
                -1
              ],
              "tolerance": 1e-06,
              "solution": "$(1+i)\\overline1+2\\overline i=(1+i)-2i=1-i$.",
              "hint": null
            },
            {
              "id": "8.4b",
              "prompt": "What is $\\dim_{\\mathbb C}(\\mathbb C^3)$?",
              "type": "number",
              "answer": 3,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "The standard complex basis has three vectors.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 8,
          "section": "8.5",
          "title": "Unitary and Hermitian Matrices",
          "focus": "Use conjugate transpose and unitary structure.",
          "problems": [
            {
              "id": "8.5a",
              "prompt": "Find the conjugate transpose $A^*$ of\n$$A=\\begin{bmatrix}1&i\\\\2&3-i\\end{bmatrix}.$$",
              "type": "matrix",
              "answer": [
                [
                  "1",
                  "2"
                ],
                [
                  "-i",
                  "3+i"
                ]
              ],
              "scalarType": "complex",
              "tolerance": 1e-06,
              "solution": "Transpose and conjugate every entry: $A^*=\\begin{bmatrix}1&2\\\\-i&3+i\\end{bmatrix}$.",
              "hint": null
            },
            {
              "id": "8.5b",
              "prompt": "Which condition defines a unitary matrix $U$?",
              "type": "choice",
              "options": [
                {
                  "value": "unit",
                  "label": "$U^*U=I$"
                },
                {
                  "value": "sym",
                  "label": "$U^T=U$"
                },
                {
                  "value": "det",
                  "label": "$\\det(U)=0$"
                }
              ],
              "answer": "unit",
              "solution": "Correct choice: **$U^*U=I$**.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 9,
      "title": "Linear Programming",
      "sessions": [
        {
          "chapter": 9,
          "section": "9.1",
          "title": "Systems of Linear Inequalities and Feasible Regions",
          "focus": "Test inequalities and locate vertices.",
          "problems": [
            {
              "id": "9.1a",
              "prompt": "Does the point $(2,1)$ satisfy $x+2y\\le5$?",
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
              "solution": "Correct choice: **Yes**.",
              "hint": null
            },
            {
              "id": "9.1b",
              "prompt": "Find the intersection of the boundary lines $x+y=5$ and $x=2$.",
              "type": "vector",
              "answer": [
                2,
                3
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Correct vector: $$(2,\\,3)$$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 9,
          "section": "9.2",
          "title": "Linear Programming in Two Variables",
          "focus": "Optimize at vertices and interpret slack.",
          "problems": [
            {
              "id": "9.2a",
              "prompt": "Maximize $z=3x+2y$ subject to\n$$x+y\\le4,\\quad x\\le2,\\quad y\\le3,\\quad x,y\\ge0.$$\nEnter the maximizing point $(x,y)$.",
              "type": "vector",
              "answer": [
                2,
                2
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Checking the feasible vertices gives the largest value $z=10$ at $(2,2)$.",
              "hint": null
            },
            {
              "id": "9.2b",
              "prompt": "At the optimizer $(2,2)$, what is the slack in the constraint $x+y\\le4$?",
              "type": "number",
              "answer": 0,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "Slack is $4-(2+2)=0$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 9,
          "section": "9.3",
          "title": "The Simplex Method for Maximization",
          "focus": "Interpret slack variables and ratio tests.",
          "problems": [
            {
              "id": "9.3a",
              "prompt": "For the constraint $x+2y\\le8$, what is the slack when $x=2$ and $y=1$?",
              "type": "number",
              "answer": 4,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$s=8-x-2y=8-2-2=4$.",
              "hint": null
            },
            {
              "id": "9.3b",
              "prompt": "In a simplex ratio test, an entering column has positive entries $(2,1,4)$ with right-hand sides $(8,5,12)$. Which row leaves the basis? Enter the row number $1,2,$ or $3$.",
              "type": "number",
              "answer": 3,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "The positive ratios are $8/2=4$, $5/1=5$, and $12/4=3$. The smallest is row 3.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 9,
          "section": "9.4",
          "title": "Minimization, Duality, and Complementary Slackness",
          "focus": "Build dual structure and use complementary slackness.",
          "problems": [
            {
              "id": "9.4a",
              "prompt": "A primal minimization problem has coefficient matrix\n$$A=\\begin{bmatrix}1&2\\\\3&1\\end{bmatrix}.$$\nWhat coefficient matrix appears in the standard dual constraints?",
              "type": "matrix",
              "answer": [
                [
                  1,
                  3
                ],
                [
                  2,
                  1
                ]
              ],
              "scalarType": "number",
              "tolerance": 1e-06,
              "solution": "The dual uses $A^T$.",
              "hint": null
            },
            {
              "id": "9.4b",
              "prompt": "At an optimal primal-dual pair, if a primal constraint has **positive slack**, what does complementary slackness imply about the corresponding dual variable?",
              "type": "choice",
              "options": [
                {
                  "value": "zero",
                  "label": "It must be 0"
                },
                {
                  "value": "positive",
                  "label": "It must be positive"
                },
                {
                  "value": "one",
                  "label": "It must equal 1"
                }
              ],
              "answer": "zero",
              "solution": "Correct choice: **It must be 0**.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 9,
          "section": "9.5",
          "title": "Mixed Constraints and the Two-Phase Simplex Method",
          "focus": "Use surplus/artificial variables and Phase I.",
          "problems": [
            {
              "id": "9.5a",
              "prompt": "Rewrite $2x+y\\ge6$ as an equality using a surplus variable $s$ and artificial variable $a$:\n$$2x+y+\\alpha s+\\beta a=6.$$\nEnter $(\\alpha,\\beta)$.",
              "type": "vector",
              "answer": [
                -1,
                1
              ],
              "labels": [
                "alpha",
                "beta"
              ],
              "tolerance": 1e-06,
              "solution": "A $\\ge$ constraint subtracts a surplus variable and adds an artificial variable: $2x+y-s+a=6$.",
              "hint": null
            },
            {
              "id": "9.5b",
              "prompt": "If the Phase I auxiliary problem has optimal value $w_{\\min}=0$, what does this indicate?",
              "type": "choice",
              "options": [
                {
                  "value": "feasible",
                  "label": "The original constraints are feasible"
                },
                {
                  "value": "infeasible",
                  "label": "The original constraints are infeasible"
                }
              ],
              "answer": "feasible",
              "solution": "Correct choice: **The original constraints are feasible**.",
              "hint": null
            }
          ]
        }
      ]
    },
    {
      "number": 10,
      "title": "Numerical Methods",
      "sessions": [
        {
          "chapter": 10,
          "section": "10.1",
          "title": "Floating-Point Arithmetic, Conditioning, and Partial Pivoting",
          "focus": "Interpret rounding and conditioning.",
          "problems": [
            {
              "id": "10.1a",
              "prompt": "Round $12.345$ to **three significant digits**.",
              "type": "number",
              "answer": 12.3,
              "tolerance": 1e-09,
              "label": "Your answer",
              "solution": "The first three significant digits are $1,2,3$; the next digit is $4$, so the stored value is $12.3$.",
              "hint": null
            },
            {
              "id": "10.1b",
              "prompt": "A nonsingular matrix has singular values $\\sigma_{\\max}=8$ and $\\sigma_{\\min}=2$. Compute $\\kappa_2(A)$.",
              "type": "number",
              "answer": 4,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "$\\kappa_2(A)=\\sigma_{\\max}/\\sigma_{\\min}=8/2=4$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 10,
          "section": "10.2",
          "title": "Jacobi and Gauss–Seidel Iterative Methods",
          "focus": "Compute iterations and test convergence.",
          "problems": [
            {
              "id": "10.2a",
              "prompt": "Apply one **Jacobi** iteration from $(x^{(0)},y^{(0)})=(0,0)$ to\n$$4x-y=3,\\qquad -x+3y=5.$$\nEnter $(x^{(1)},y^{(1)})$.",
              "type": "vector",
              "answer": [
                0.75,
                1.6666666666666667
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "Rewrite as $x=(3+y)/4$ and $y=(5+x)/3$. Using only old values gives $(3/4,5/3)$.",
              "hint": null
            },
            {
              "id": "10.2b",
              "prompt": "An iteration matrix has spectral radius $\\rho(B)=0.6$. Does the stationary iteration converge for every initial error?",
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
              "solution": "A stationary linear iteration converges when $\\rho(B)<1$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 10,
          "section": "10.3",
          "title": "Power Method and Rayleigh Quotients",
          "focus": "Perform power iterations and estimate eigenvalues.",
          "problems": [
            {
              "id": "10.3a",
              "prompt": "Let $A=\\operatorname{diag}(5,2)$ and $x^{(0)}=(1,1)$. Compute $Ax^{(0)}$, then scale by its largest absolute component so that the first component is $1$. Enter the scaled vector.",
              "type": "vector",
              "answer": [
                1,
                0.4
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "$Ax^{(0)}=(5,2)$; dividing by $5$ gives $(1,0.4)$.",
              "hint": null
            },
            {
              "id": "10.3b",
              "prompt": "For $A=\\operatorname{diag}(5,2)$ and $x=(1,0)$, compute the Rayleigh quotient $\\frac{x^TAx}{x^Tx}$.",
              "type": "number",
              "answer": 5,
              "tolerance": 1e-06,
              "label": "Your answer",
              "solution": "Correct value: $$5$$.",
              "hint": null
            }
          ]
        },
        {
          "chapter": 10,
          "section": "10.4",
          "title": "Applications of Numerical Linear Algebra",
          "focus": "Connect numerical methods with regression and long-run models.",
          "problems": [
            {
              "id": "10.4a",
              "prompt": "For quadratic least squares $p(x)=a_0+a_1x+a_2x^2$, what row of the design matrix corresponds to the data point with $x=2$?",
              "type": "vector",
              "answer": [
                1,
                2,
                4
              ],
              "labels": null,
              "tolerance": 1e-06,
              "solution": "The design row is $(1,x,x^2)=(1,2,4)$.",
              "hint": null
            },
            {
              "id": "10.4b",
              "prompt": "A Leslie-type population matrix has dominant eigenvalue $1.05$. What is the long-run interpretation, assuming the model assumptions remain valid?",
              "type": "choice",
              "options": [
                {
                  "value": "grow",
                  "label": "Approximately 5% growth per time step"
                },
                {
                  "value": "decline",
                  "label": "Approximately 5% decline per time step"
                },
                {
                  "value": "same",
                  "label": "No long-run growth"
                }
              ],
              "answer": "grow",
              "solution": "The dominant eigenvalue is the asymptotic multiplicative growth factor: $1.05$ means about $5\\%$ growth per step.",
              "hint": null
            }
          ]
        }
      ]
    }
  ],
  "sessionCount": 52,
  "problemCount": 104
};
  root.HOMEWORK_DATA = data;
  if (typeof module !== "undefined" && module.exports) module.exports = data;
})(typeof window !== "undefined" ? window : globalThis);
