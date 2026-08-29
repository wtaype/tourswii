// INFORMACIÓN DEL APP 
export let id = 'tourswii';
export let app = 'Kevin Tours';
export let icon = 'fa-dune';
export let titulo = 'Kevin Tours | Sandboarding y Tubulares en Huacachina';
export const keywii = 'tours huacachina, sandboarding huacachina, tubulares ica, buggies huacachina, atardecer huacachina, oasis huacachina';
export let descri = 'expertos en sandboarding profesional, buggies y tours de aventura en el Oasis de Huacachina, Ica. Vive la adrenalina al mejor precio.';
export let linkweb = 'https://tours.amorwii.com';
export let lanzamiento = 2026;
export let by = '@wilder.taype';
export let linkme = 'https://wtaype.github.io/';
export let versionName = '1.0.0';
export let version = 'v1';

export default { id, app, icon, titulo, keywii, descri, linkweb, lanzamiento, by, linkme, version, versionName };

/** ACTUALIZAR AL TAG POR SEGURIDAD [TAG NUEVO] (1)
git tag v1 -m "Version v1" ; git push origin v1

ACTUALIZACIÓN AL MAIN PRINCIPAL DEL PROYECTO [MAIN] (2)
git add . ; git commit -m "Actualizacion Principal v1.0.0" ; git push origin main

// REEMPLAZAR TAG DE SEGURIDAD EXISTENTE [TAG REMPLAZO] (3)
git tag -d v1 ; git tag v1 -m "Version v1 actualizada" ; git push origin v1 --force

 ACTUALIZACION TAG[END] */