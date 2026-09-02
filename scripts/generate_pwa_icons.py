import math
from PIL import Image, ImageDraw, ImageFilter

def create_chakra_icon(size):
    # Scale factor for supersampling
    scale = 2
    actual_size = size * scale
    center = actual_size // 2
    
    # Create RGBA canvas
    img = Image.new('RGBA', (actual_size, actual_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 1. Dark Velvet Rounded Background (Deep Cosmic Gradient Simulation)
    radius = int(actual_size * 0.25)
    # Background base
    draw.rounded_rectangle([0, 0, actual_size, actual_size], radius=radius, fill=(8, 2, 18, 255))
    
    # Radial glow in center
    glow_radius = int(actual_size * 0.45)
    for r in range(glow_radius, 0, -8):
        alpha = int(45 * (1 - r / glow_radius))
        draw.ellipse([center - r, center - r, center + r, center + r], fill=(88, 28, 135, alpha))
    
    # 2. Outer Concentric Sacred Circles
    r1 = int(actual_size * 0.45)
    r2 = int(actual_size * 0.42)
    r3 = int(actual_size * 0.40)
    
    draw.ellipse([center - r1, center - r1, center + r1, center + r1], outline=(245, 158, 11, 100), width=int(2 * scale))
    draw.ellipse([center - r2, center - r2, center + r2, center + r2], outline=(236, 72, 153, 180), width=int(3 * scale))
    draw.ellipse([center - r3, center - r3, center + r3, center + r3], outline=(251, 191, 36, 120), width=int(2 * scale))
    
    # 3. 12 Radiating Lotus Petals
    num_petals = 12
    petal_len = int(actual_size * 0.38)
    inner_len = int(actual_size * 0.18)
    
    for i in range(num_petals):
        angle = (i * 2 * math.pi) / num_petals
        tip_x = center + math.cos(angle) * petal_len
        tip_y = center + math.sin(angle) * petal_len
        
        perp_angle1 = angle + math.pi / 2
        perp_angle2 = angle - math.pi / 2
        mid_r = (petal_len + inner_len) / 2
        mid_w = int(actual_size * 0.045)
        
        m1_x = center + math.cos(angle) * mid_r + math.cos(perp_angle1) * mid_w
        m1_y = center + math.sin(angle) * mid_r + math.sin(perp_angle1) * mid_w
        m2_x = center + math.cos(angle) * mid_r + math.cos(perp_angle2) * mid_w
        m2_y = center + math.sin(angle) * mid_r + math.sin(perp_angle2) * mid_w
        
        in_x = center + math.cos(angle) * inner_len
        in_y = center + math.sin(angle) * inner_len
        
        draw.polygon([(in_x, in_y), (m1_x, m1_y), (tip_x, tip_y), (m2_x, m2_y)], 
                     fill=(245, 158, 11, 40), outline=(251, 191, 36, 180))

    # 4. Sacred Interlaced Triangles (Shatkona)
    tri_r = int(actual_size * 0.20)
    
    # Upward Triangle (Shiva / Consciousness)
    pts_up = [
        (center, center - tri_r),
        (center + int(tri_r * math.cos(math.pi / 6)), center + int(tri_r * math.sin(math.pi / 6))),
        (center - int(tri_r * math.cos(math.pi / 6)), center + int(tri_r * math.sin(math.pi / 6))),
    ]
    draw.polygon(pts_up, fill=(168, 85, 247, 50), outline=(253, 224, 71, 230))
    
    # Downward Triangle (Shakti / Energy)
    pts_down = [
        (center, center + tri_r),
        (center + int(tri_r * math.cos(math.pi / 6)), center - int(tri_r * math.sin(math.pi / 6))),
        (center - int(tri_r * math.cos(math.pi / 6)), center - int(tri_r * math.sin(math.pi / 6))),
    ]
    draw.polygon(pts_down, fill=(239, 68, 68, 50), outline=(253, 224, 71, 230))
    
    # 5. 7 Chakra Energy Jewels Ring
    chakra_colors = [
        (239, 68, 68),   # Muladhara (Red)
        (249, 115, 22),  # Svadhisthana (Orange)
        (234, 179, 8),   # Manipura (Yellow)
        (16, 185, 129),  # Anahata (Green)
        (6, 182, 212),   # Visuddha (Cyan)
        (99, 102, 241),  # Ajna (Indigo)
        (168, 85, 247),  # Sahasrara (Violet)
    ]
    ring_r = int(actual_size * 0.28)
    jewel_r = int(actual_size * 0.024)
    
    for i, color in enumerate(chakra_colors):
        ang = (i * 2 * math.pi / 7) - (math.pi / 2)
        jx = center + math.cos(ang) * ring_r
        jy = center + math.sin(ang) * ring_r
        # Glow halo
        draw.ellipse([jx - jewel_r*2, jy - jewel_r*2, jx + jewel_r*2, jy + jewel_r*2], fill=(*color, 80))
        # Core jewel
        draw.ellipse([jx - jewel_r, jy - jewel_r, jx + jewel_r, jy + jewel_r], fill=(*color, 255), outline=(255, 255, 255, 220))

    # 6. Central Glowing Bindu Orb
    b_glow = int(actual_size * 0.08)
    for r in range(b_glow, 0, -4):
        draw.ellipse([center - r, center - r, center + r, center + r], fill=(245, 158, 11, int(120 * (1 - r / b_glow))))
    
    b_core = int(actual_size * 0.04)
    draw.ellipse([center - b_core, center - b_core, center + b_core, center + b_core], fill=(255, 255, 255, 255))
    
    # Resize down with Lanczos antialiasing
    final_img = img.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

if __name__ == '__main__':
    # Generate PWA 512x512
    icon512 = create_chakra_icon(512)
    icon512.save('d:/Downloads/Chakras/public/pwa-512x512.png', 'PNG')
    print("Created public/pwa-512x512.png")
    
    # Generate PWA 192x192
    icon192 = create_chakra_icon(192)
    icon192.save('d:/Downloads/Chakras/public/pwa-192x192.png', 'PNG')
    print("Created public/pwa-192x192.png")
    
    # Generate Apple Touch Icon 180x180
    icon180 = create_chakra_icon(180)
    icon180.save('d:/Downloads/Chakras/public/apple-touch-icon.png', 'PNG')
    print("Created public/apple-touch-icon.png")
