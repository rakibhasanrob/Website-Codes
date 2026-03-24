@echo off
setlocal
cd /d "%~dp0"
title Portfolio preview

where node >nul 2>&1
if errorlevel 1 goto serve_without_node

if not exist "node_modules\" (
  echo First-time setup: installing packages (this may take a minute^)...
  call npm install
  if errorlevel 1 goto fail
)
echo Building latest static site into the "out" folder...
call npm run build
if errorlevel 1 goto fail

:serve
echo.
echo Starting local preview. Your browser should open automatically.
echo Keep this window open while you view the site. Press Ctrl+C to stop.
echo.

where node >nul 2>&1
if not errorlevel 1 (
  start "" "http://127.0.0.1:3333"
  call npx --yes serve@14 out -l 3333
  goto eof
)

where py >nul 2>&1
if not errorlevel 1 (
  start "" "http://127.0.0.1:8000"
  pushd out
  py -m http.server 8000
  popd
  goto eof
)

where python >nul 2>&1
if not errorlevel 1 (
  start "" "http://127.0.0.1:8000"
  pushd out
  python -m http.server 8000
  popd
  goto eof
)

echo Could not find Node or Python to run a tiny web server.
echo Install Node.js from https://nodejs.org — then double-click this file again.
pause
exit /b 1

:serve_without_node
if exist "out\index.html" goto serve
echo Could not find Node.js, and there is no existing "out" build to preview.
echo Install Node.js from https://nodejs.org, then double-click this file again.
pause
exit /b 1

:fail
echo Something went wrong. Check the messages above.
pause
exit /b 1

:eof
endlocal
