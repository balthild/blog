---
title: 四个热力学势和它们之间的关系
date: 2019-06-24 16:56:46
tags:
---

<u>内能</u> $U(S, V)$、<u>焓</u> $H(S, p)$、<u>亥姆霍兹自由能</u> $F(T, V)$、<u>吉布斯自由能</u> $G(T, p)$ 这四个函数被称为<u>热力学势函数</u>，关于它们的方程被称为<u>热力学基本方程</u>。但是一开始学到时，这四个式子不太好记，容易混淆，所以我整理了一下它们的关系。

其中最基本的一个方程是关于内能的方程 $\dd U = T \dd S + p \dd V$，它可以联立<u>热力学第一定律</u>和<u>熵</u>的定义推导出来。

注意本文中 $\dd W = p \dd V$ 为外界对气体做的功，若要以气体对外界做功来表示，则需要变更文中出现的所有 $p$ 的正负号。当热力学系统不是<u>理想气体</u>时，把 $p, V$ 换成对应的力学效应量 $Y, X$ 即可。

$$
\left\{
\begin{array}{ll}
    U = Q + W \\
    \dd S = \frac{\dd Q}{T} \\
\end{array}
\right.
\implies\enspace
\begin{aligned}
\dd U &= \dd Q + \dd W \\
      &= T \dd S + p \dd V
\end{aligned}
$$

四个热力学势函数之间的关系可以用一张图简明地概括：

<!-- https://q.uiver.app/?q=WzAsNCxbMCwwLCJVIl0sWzIsMCwiSCJdLFswLDIsIkYiXSxbMiwyLCJHIl0sWzAsMiwiLVRTIiwyXSxbMCwxLCItcFYiXSxbMSwzLCItVFMiXSxbMiwzLCItcFYiLDJdXQ== -->
<iframe class="quiver-embed" src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJVIl0sWzIsMCwiSCJdLFswLDIsIkYiXSxbMiwyLCJHIl0sWzAsMiwiLVRTIiwyXSxbMCwxLCItcFYiXSxbMSwzLCItVFMiXSxbMiwzLCItcFYiLDJdXQ==&embed" width="320" height="280" style="border-radius: 8px; border: none;"></iframe>

它们之间的变换关系叫做<u>勒让德变换</u>。勒让德变换把函数 $f(x)$ 变换为 $f^*(t)$，其中 $t=\dv{f}{x}$，而 $\eval{f^*(t)}_{x=x_0}$ 的值是 $f(x)$ 在 $x_0$ 处切线的纵截距。换言之，勒让德变换把 $f: x \mapsto y$ 的映射变换为 $f^*: \text{slope}\mapsto\text{intercept}$ 的映射。在分析力学中，由<u>拉格朗日量</u>到<u>哈密顿量</u>的变换 $\mathcal{H}(q,p,t)=\sum_i{ p_i\dot{q}_i} - \mathcal{L}(q,\dot{q},t)$ 就是勒让德变换。

内能 $U(S,V)$ 对自变量 $V$ 的勒让德变换为 $U^*(S,p)=pV-U(S,V)$，其中 $p=\qty(\pdv{U}{V})_S$ 是系统的压强。$U^*$ 也是一个热力学势，通常为了计算方便而取它的相反值，定义为系统的焓 $H=-U^*(S,p)=U-pV$。亥姆霍兹自由能同理：$F=-U^*(T,V)=U-TS$，其中 $T=\qty(\pdv{U}{S})_V$ 为系统的热力学温度。

有了这些关系后，就可以把剩余三条式子都推导出来了：

$$
\begin{aligned}
\dd H &= \dd (U - pV) \\
      &= T \dd S + p \dd V - p \dd V - V \dd p \\
      &= T \dd S - V \dd p \\
\\
\dd F &= \dd (U - TS) \\
      &= T \dd S + p \dd V - T \dd S - S \dd T \\
      &= - S \dd T + p \dd V \\
\\
\dd G &= \dd (U - pV - TS) \\
      &= T \dd S + p \dd V - p \dd V - V \dd p - T \dd S - S \dd T \\
      &= - S \dd T - V \dd p
\end{aligned}
$$

