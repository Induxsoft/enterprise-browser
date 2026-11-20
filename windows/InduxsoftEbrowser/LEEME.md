# Induxsoft e-browser para Windows 2.0.0

Un solo archivo, sin instalar nada más. Windows 10 y 11.

| Equipo | Archivo | SHA-256 |
|---|---|---|
| Intel o AMD (la mayoría) | `x64/ebrowser.exe` | `415de4f2b9902f8d25c5c75e3f4d4004be45849efa36997414ca61879d408983` |
| ARM (Snapdragon) | `arm64/ebrowser.exe` | `d80e03e3cc8caa815edb92b7d25dab1ed3a8ed5902b1a2241495b352d9f2a0a1` |

## Uso

```bat
ebrowser.exe                          :: pantalla de inicio
ebrowser.exe install                  :: instalar para este usuario (menú Inicio, sin administrador)
ebrowser.exe http://192.168.1.50/pos/ fullscreen topmost close-password=1234
ebrowser.exe help                     :: todas las opciones
```

- Acepta todos los parámetros y el `app.ini` del EnterpriseBrowser de 2023.
- Para que una copia guarde sus datos en su propia carpeta, pon junto al exe un archivo vacío llamado `ebrowser.portable`.
- Requiere Microsoft Edge WebView2 Runtime (viene con Windows 11 y Windows 10 actualizado); si falta, e-browser lo instala.
- El ejecutable no está firmado: al descargarlo, SmartScreen puede pedir confirmación («Más información» → «Ejecutar de todas formas»).

La versión de 2023 sigue en `../Versiones anteriores (no recomendadas)/2023/`.
