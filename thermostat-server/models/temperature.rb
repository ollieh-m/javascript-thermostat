class Temperature

	def self.set_temp(temperature)
		@@temperature = temperature
	end

	def self.get_temp
		@@temperature ||= 20
		@@temperature
	end

end