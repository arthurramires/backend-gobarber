import { container } from 'tsyringe';

import RedisCacheProvider from './implementatios/RedisCacheProvider';

import ICacheProvider from './models/iCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
