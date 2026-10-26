// Preserva parâmetros de campanha no link de pagamento, sem instalar rastreamento.
const allowed=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','src','sck'];
const current=new URLSearchParams(location.search);
document.querySelectorAll('[data-checkout]').forEach(link=>{const target=new URL(link.href);allowed.forEach(key=>{const val=current.get(key);if(val)target.searchParams.set(key,val)});link.href=target.toString()});
