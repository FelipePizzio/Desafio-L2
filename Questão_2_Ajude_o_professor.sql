/Quantidade de horas que cada professor tem comprometido em aulas/
select 
    p.codprof,
    p.nomeprof,
    SUM(numhoras) as horas_aulas
from professor p
inner join profturma pt
on p.codprof = pt.codprof
inner join horario h
on h.numdisc = pt.numdisc
group by  p.codprof, p.nomeprof;

/Lista de salas com horários livres e ocupados/
select 
    s.numsala,
    h.horainicio,
    (case when h.numdisc is null then 'livre' else 'ocupado' end) as isLivre
from sala s
inner join horario h
on s.numsala = h.numsala;
