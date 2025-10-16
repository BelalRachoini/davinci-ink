import { useEffect, useState } from "react";
import { Instagram, ExternalLink } from "lucide-react";

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption?: string;
}

export function InstagramEmbed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // For now, we'll show placeholder structure and direct link to Instagram
    // In a real implementation, you would integrate with Instagram Basic Display API
    setLoading(false);
  }, []);

  const mockImages = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square bg-dark-gray animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <Instagram className="h-12 w-12 text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400 mb-4">Unable to load Instagram feed</p>
        <a 
          href="https://www.instagram.com/davinci.ink_studio/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-luxury-gold hover:text-light-gold transition-colors duration-300"
        >
          <span>View on Instagram</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockImages.map((image, index) => (
        <div key={index} className="relative group">
          <img 
            src={image} 
            alt={`Tattoo artwork ${index + 1}`}
            className="aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/davinci.ink_studio/", "_blank")}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <Instagram className="h-8 w-8 text-luxury-gold" />
          </div>
        </div>
      ))}
    </div>
  );
}
