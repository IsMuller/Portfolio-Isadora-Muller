/* 
 * Tipos Abstratos de Dados - TADs
 * Arquivo do programa principal, que usa o TAD racional.
 * Feito em 16/09/2024 para a disciplina CI1001 - Programação 1.
*/


#include <stdio.h>
#include <stdlib.h>
#include "racional.h"


int main ()
{
    srand (0); 
    int n, i; 
    long max;
    struct racional r1, r2, soma, subtracao, divisao, multiplicacao;

    scanf("%d", &n);
    scanf("%ld", &max);
    
    if ((n > 0) && (n < 100) && (max > 0) && (max < 30)){ 

        for (i = 1; i <= n; i++){
            printf("%d: ", i);
            r1 = sorteia_r (-max, max);
            r2 = sorteia_r (-max, max);

            imprime_r(r1);
            printf(" ");
            imprime_r(r2);
            printf(" ");

            if (valido_r(r1) == 0 || valido_r(r2) == 0) {
                printf("NUMERO INVALIDO\n");
                return 1;
            }

            soma = soma_r(r1, r2);
            subtracao = subtrai_r(r1, r2);
            multiplicacao = multiplica_r(r1, r2);
            divisao = divide_r(r1, r2);

            if (valido_r(divisao) == 0) {
                printf("DIVISAO INVALIDA\n");
                return 1;
            }

            imprime_r(soma);
            printf(" ");
            imprime_r(subtracao);
            printf(" ");
            imprime_r(multiplicacao);
            printf(" ");
            imprime_r(divisao);
            printf("\n");
        }
    }

    return (0) ;
}
