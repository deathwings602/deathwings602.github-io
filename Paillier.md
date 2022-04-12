# Paillier 算法原理

## 1. 符号说明

+ $ \mathbb{Z}_n^*$ 表示 $\mathbb{Z}_n$ 中与 $n$ 互质的数所构成的乘法群($\mod{n}$);
+ $\lambda (n)$ 表示 $\mathbb{Z}_n^*$ 的阶数，我们有 $\forall g \in \mathbb{Z}_n^*, g^\lambda = 1 \mod{n}$ ，下面简要记做 $\lambda$。

</br>

## 2. 性质与定义

**Proposition 1** $\forall \omega \in \mathbb{Z}_{n^2}^*$，我们有 $\omega ^ {n\lambda} = 1 \mod{n^2}$，$\omega^\lambda = 1 \mod{n}$ 。

> *proof：* 首先有 $\omega^\lambda = 1 \mod{n}$，则有
> $$
> \begin{aligned}
>     \omega^{n\lambda} &= (1 + kn)^n \\ 
>                       &= 1 \mod{n^2}
> \end{aligned}
> $$

**Def 1** 称 $z$ 是 $n^2$ 的 $n$ 次剩余，若有一个整数 $y \in \mathbb{Z}_{n^2}^*$，使得 $y^n = z \mod{n^2}$。这样的 $z$ 构成了 $\mathbb{Z}_{n^2}^*$ 的一个子群，其中每个元素都有 $n$ 个 $n$ 次方根，最小的记做 $\sqrt[n]{z}$。

显然我们有 $\sqrt[n]{z} < n$，这是因为 $\sqrt[n]{z} + kn, k = 0, ..., n-1$ 是不同的 $n$ 次方根。

**Assumption 1** 判断某个 $z$ 是否是 $n^2$ 的 $n$ 次剩余没有多项式时间的解法，这对于每个 $z$ 都是成立的。因为将 $z$ 乘上一个 $n$ 次剩余，可以使其均匀分布在 $n$ 次剩余群中（若 $z$ 确实是 $n$ 次剩余）。

**Def 2** 定义函数 $E_g: \mathbb{Z}_n \times \mathbb{Z}_n^* \rightarrow \mathbb{Z}_{n^2}^*: (x, y) \rightarrow g^x y^n \mod n^2$，其中 $g\in \mathbb{Z}_{n^2}^*$。

**Proposition 2** 若 $g$ 的阶数为 $n$ 的倍数，$E_g$ 为双射。

> *proof：* 若 $E_g(x_1, y_1) = E_g(x_2, y_2)$，则有 $g^{x_1 - x_2} (\frac{y_1}{y_2})^n = 1 \mod{n^2}$，两边同时做 $\lambda$ 次方，得到 $(\frac{y_1}{y_2})^{n\lambda} = 1\mod{n^2}$，所以 $g^{\lambda (x_1 - x_2)} = 1\mod n^2$，由于 $|x_1 - x_2| < n$ 且 $\lambda < n$，我们得到 $x_1 = x_2$，进而我们得到 $(\frac{y_1}{y_2})^n = 1\mod{n^2}$，设 $\frac{y_1}{y_2}$ 的阶数为 $k$，则有 $k | n, k | \lambda$，所以 $k = 1$，$y_1 = y_2 \mod{n}$。因此 $E_g$ 是单射，从值域和定义域的大小相等，可以得到这实际上是一个双射。关于这个事实，可以考虑欧拉函数 $\phi(n)$ 是如何计算的。

**Def 3** 对于上述的 $g$，$[[\omega]]_g$ 称为 $\omega$ 相对于 $g$ 的 $n$ 次剩余类，表示存在 $y$，使得 $E_g(x, y) = \omega$ 的 $x$。则 $[[\omega]]_g = \mathbb{0}$ 当且仅当 $\omega$ 是 $n^2$ 的 $n$ 次剩余，因为此时 $\omega = y^n$ 。

立刻有如下性质：

**Proposition 3** 若 $g\in \mathbb{Z}_{n^2}^*$ 的阶数是 $n$ 的正整数倍，那么 $[[\omega_1 \omega_2]]_g = [[\omega_1]]_g [[\omega_2]]_g$。可以看出这是一个 $\mathbb{Z}_{n^2}^* \rightarrow \mathbb{Z}_n$ 的群同态。

</br>

## 3. $\mathbb{CLASS}[n]$ 问题的计算难解性

这是给定 $\omega\in \mathbb{Z}_{n^2}^*$ 和符合上述要求的 $g$，寻找 $[[\omega]]_g$ 的问题，我们认为这个问题是难解的。

**Proposition 4** $\mathbb{CLASS}[n]$ 问题的难度对于所有的 $\omega$ 都是一样的，选择 $\alpha \in \mathbb{Z}_n, \beta \in \mathbb{Z}_n^*$，令 $\omega ' = \omega g^\alpha \beta^n \mod{n^2}$，则可以把 $\omega$ 均匀分布到 $\mathbb{Z}_{n^2}^*$ 上。

**Proposition 5** $\mathbb{CLASS}[n]$ 问题对于所有符合条件的 $g$ 的难度都是一样的。

> *proof:* $[[\omega]]_{g_1} = [[\omega]]_{g_2}[[g_2]]_{g_1}$，若有 $g_1^{x_1}y_1^n = g_2^{x_2}y_2^n = \omega$ 且 $g_2 = g_1^{x_3}y_3^n$ ，则 $g_1^{x_2 x_3}(y_3^{x_2} y_2)^n = \omega$。
> 
> 另外，$[[g_1]]_{g_2} = [[g_2]]_{g_1}^{-1}$，若 $g_2^{x_1} y_1^n = g_1$ 且 $g_1^{x_2} y_2^n = g_2$，则 $(g_1^{x_2}y_2^n)^{x_1}y_1^n = g_1$，由于 $E_g$ 的双射性质，立刻有 $x_1 x_2 = 1$。
> 
> 所以 $[[\omega]]_{g_1} = [[\omega]]_{g_2}[[g_1]]_{g_2}^{-1}$，也就是说，对于某个 $g_1$ 的 $\mathbb{CLASS}[n]$ 问题，至多只需要求解任意两步对于其他 $g_2$ 的$\mathbb{CLASS}[n]$ 问题即可。所以所有的 $g$ 的难度是等价的。

### 3.1 $\mathbb{FACT}[n]\Rightarrow \mathbb{CLASS}[n]$

考虑 $S_b = \{u\in \mathbb{Z}_{n^2}| u = 1\mod{n}\}$ 和上面的函数 $L(u) = \frac{u - 1}{n}$。

**Lemma** $\forall \omega \in \mathbb{Z}_{n^2}^*, L(\omega^\lambda \mod{n^2}) = \lambda [[ \omega]]_{n + 1} \mod{n}$。

> *proof:* 显然 $1 + n$ 的阶数是 $n$。只需证 $(1 + n)^{L(\omega^\lambda \mod{n^2})} = [[\omega^\lambda]]_{1 + n}$，这是因为$[[\omega]]_g$ 具有同态性质。另外由 *Proposition 1*，可以得到 $\omega^\lambda = kn + 1$，所以有：
> $$
> L(\omega^\lambda \mod{n^2}) = k \\
> (1 + n)^k = 1 + kn \mod{n} = \omega^\lambda
> $$
> 我们得证。

若可以解决 $\mathbb{FACT}[n]$ 问题，则我们可以得到 $\lambda$，然后有:
$$
\frac{\lambda [[\omega]]_{n + 1}}{\lambda [[g]]_{n + 1}} = [[\omega]]_g
$$
就解出了 $\mathbb{CLASS}[n]$ 问题。

### 3.2 $\mathbb{RSA}[n, n]\Rightarrow \mathbb{CLASS}[n]$

我们只需要求解 $[[\omega]]_{n + 1}$ 即可，由于 $\omega = (1 + n)^xy^n \mod{n^2} = y^n (1 + xn) \mod{n^2}$，所以$\omega = y^n \mod{n}$，从 $\mathbb{RSA}[n, n]$ 中可以解出 $y$，然后用于求解 $x$。

### 3.3 $\mathbb{CLASS}[n] \Rightarrow \mathbb{DCLASS}[n]$

这是判定 $x = [[\omega]]_{g}$ 是否成立的问题。这个推出关系是显然的。

### 3.4 $\mathbb{DCLASS}[n] \equiv \mathbb{CR}[n]$

有了上面的计算层次，我们可以假设 $\mathbb{CLASS}[n]$ 是计算难解的。

</br>

## 4. Paillier加密系统

### 4.1 密钥准备

选取大素数 $p, q$，令 $n = pq$，$\lambda = \Phi(n)$，$g\in \mathbb{Z}_{n^2}^*$ 的阶数为 $n$ 的倍数。

可以通过检查 $gcd(L(g^\lambda \mod{n^2}), n) = 1$ 来选择 $g$。

这是因为：如果 $g$ 在 $\mathbb{Z}_n^*$ 中的阶数为 $s$，则有 $g^s = 1 + k' n \mod{n^2}$，则 $\lambda = ts$，则 $k = tk' \mod{n}$，所以我们也有 $gcd(k', n) = 1$。我们知道 $g$ 的阶数形如 $zs$，则 $g^{zs} = 1 + zk'n \mod{n^2} = 1 \mod{n^2}$，则一定有 $n|z$。

我们把 $(n, g)$ 当做公钥，$\lambda$ 当做私钥。

### 4.2 加密

对于明文 $m < n$，选择随机数 $r < n$，计算密文为 $c = g^m r^n \mod{n^2}$。

### 4.3 解密

对于密文 $c < n^2$，可以计算:
$$
m = [[c]]_g = \frac{[[c]]_{n+1}}{[[g]]_{n+1}} = \frac{L(c^\lambda \mod{n^2})}{L(g^\lambda \mod{n^2})}
$$
这样就完成了解密。