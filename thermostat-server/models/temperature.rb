class Temperature

	def self.set_temp(temperature)
		@@temperature = temperature
	end

	def self.get_temp
		@@temperature ||= nil
		@@temperature
	end

end