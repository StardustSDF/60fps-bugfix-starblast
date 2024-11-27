    function applyCustomCursor() {
        const cursorTrailCount = 2;
        const trailElements = [];
        const trailDelay = 5;
        const edgeThreshold = 3;

        for (let i = 0; i < cursorTrailCount; i++) {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.width = '24px';
            trail.style.height = '24px';
            trail.style.backgroundImage = `url(${chrome.runtime.getURL("scripts/crosshair.png")})`;
            trail.style.backgroundSize = 'contain';
            trail.style.pointerEvents = 'none';
            trail.style.opacity = '1';
            trail.style.transform = 'translate(-50%, -50%)';
            trail.style.zIndex = '69420';
            document.body.appendChild(trail);
            trailElements.push(trail);
        }

        let mouseX = 0, mouseY = 0;
        let trailPositions = Array(cursorTrailCount).fill({ x: 0, y: 0 });

        function updateCursorTrail() {
            trailPositions = [{ x: mouseX, y: mouseY }, ...trailPositions.slice(0, cursorTrailCount - 1)];

            trailElements.forEach((trail, index) => {
                setTimeout(() => {
                    trail.style.left = `${trailPositions[index].x}px`;
                    trail.style.top = `${trailPositions[index].y}px`;

                    if (
                        trailPositions[index].x <= edgeThreshold ||
                        trailPositions[index].x >= window.innerWidth - edgeThreshold ||
                        trailPositions[index].y <= edgeThreshold ||
                        trailPositions[index].y >= window.innerHeight - edgeThreshold
                    ) {
                        trail.style.opacity = '0';
                    } else {
                        trail.style.opacity = '1';
                    }
                }, index * trailDelay);
            });

            requestAnimationFrame(updateCursorTrail);
        }

        updateCursorTrail();

        window.addEventListener('mousemove', (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        const style = document.createElement('style');
        style.innerHTML = `
            * {
                cursor: none !important;
            }
            .sbg-crosshair {
                visibility: visible !important;
            }
        `;
        document.head.appendChild(style);
    }