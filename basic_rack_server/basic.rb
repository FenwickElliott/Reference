require 'rack'

class Basic
    def call(env)
        [200, {}, ["Most basic rack implimentation"]]
    end
end

