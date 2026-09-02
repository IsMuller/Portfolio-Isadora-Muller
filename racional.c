
#include <stdio.h>
#include <stdlib.h>
#include "racional.h"



long aleat (long min, long max);
long mmc (long a, long b);
long mdc (long a, long b);
struct racional simplifica_r (struct racional r);



/* Cria um número racional com o numerador e denominador indicados. */
struct racional cria_r (long numerador, long denominador) {
  struct racional r;
    r.num = numerador;
    r.den = denominador;
    return r;
}

/* Retorna 1 se o racional r for válido ou 0 se for inválido.*/
int valido_r (struct racional r){
  if (r.den == 0)
    return 0;
  return 1;
}

/* Retorna um número racional aleatório na forma simplificada.*/
struct racional sorteia_r (long min, long max){

  long numerador = aleat(min, max), denominador = aleat(min, max);

  struct racional r = cria_r(numerador, denominador);

  return simplifica_r(r);

}

/* Imprime um racional r, respeitando as regras determinadas.*/

void imprime_r (struct racional r){

  r = simplifica_r(r);
  if (valido_r(r) == 0) {
    printf("INVALIDO");
    return;
  }

  if (r.den == 1 || r.num == 0) 
    printf("%ld", r.num);
  else
    printf("%ld/%ld", r.num, r.den);
}

/* Retorna a soma dos racionais r1 e r2.
 * se r1 ou r2 for inválido, o resultado deve ser inválido */
struct racional soma_r (struct racional r1, struct racional r2){

  if (valido_r(r1) == 0 || valido_r(r2) == 0)
    return cria_r(0, 0);

  struct racional r;
  if (r1.den == r2.den)
    r.den = r1.den;
  else {
    r.den = mmc(r1.den, r2.den);
    r1.num = (r.den / r1.den) * r1.num;
    r2.num = (r.den / r2.den) * r2.num;
  }
  r.num = r1.num + r2.num;

  return simplifica_r(r);
}


/* Retorna a subtração dos racionais r1 e r2.
 * se r1 ou r2 for inválido, o resultado deve ser inválido */
struct racional subtrai_r (struct racional r1, struct racional r2){

  if (valido_r(r1) == 0 || valido_r(r2) == 0)
    return cria_r(0, 0);

  struct racional r;

  if (r1.den == r2.den)
    r.den = r1.den;
  else {
    r.den = mmc(r1.den, r2.den);
    r1.num = (r.den / r1.den) * r1.num;
    r2.num = (r.den / r2.den) * r2.num;
  }
  r.num = r1.num - r2.num;

  return simplifica_r(r);
}

/* Retorna a multiplicação dos racionais r1 e r2.
 * se r1 ou r2 for inválido, o resultado deve ser inválido */
struct racional multiplica_r (struct racional r1, struct racional r2){

  if (valido_r(r1) == 0 || valido_r(r2) == 0)
    return cria_r(0, 0);

  struct racional r;
  r.num = r1.num * r2.num;
  r.den = r1.den * r2.den;
  return simplifica_r(r);
}

/* Retorna a divisão dos racionais r1 e r2.
 * se r1 ou r2 for inválido, o resultado deve ser inválido.
 * observe que a divisão com r1 e r2 válidos pode gerar um racional inválido */
struct racional divide_r (struct racional r1, struct racional r2){

  if (valido_r(r1) == 0 || valido_r(r2) == 0)
    return cria_r(0, 0);

  struct racional r;
    r.num = r1.num * r2.den;
    r.den = r1.den * r2.num;
    return simplifica_r(r);
}

/* retorna um número aleatório entre min e max, inclusive. */
long aleat (long min, long max)
{
  return min + rand() % (max - min + 1); 
}

/* Máximo Divisor Comum entre a e b      */
/* calcula o MDC pelo método de Euclides */
long mdc (long a, long b)
{
  long aux, resto;

  if (a < 0) //garante que MDC seja positivo
    a = -a;

  if (b < 0) //garante que MDC seja positivo
    b = -b;

  if (b > a){
    aux = a;
    a = b;
    b = aux;
  }
  if (b == 0) 
    return a;

  resto = a % b;
  while (resto != 0) {
      aux = resto;
      resto = b % aux;
      b = aux;
  }
  return b;
}


/* Mínimo Múltiplo Comum entre a e b */
long mmc (long a, long b)
{
  long MDC;

  if (a == 0 || b == 0)
        return 0;

  MDC = mdc(a, b);
  return (a / MDC) * b; // evita overflow, divide antes e multiplica depois

}

/* Recebe um número racional e o simplifica. */
struct racional simplifica_r (struct racional r)
{
  if (valido_r (r) == 0)
    return r;

  if (r.den < 0){
    r.den = -r.den;
    r.num = -r.num;
  }

  long MDC = mdc(r.num, r.den);

  r.num = r.num / MDC;
  r.den = r.den / MDC;
  return r;

}
